import React, { useEffect } from "react";
import { connect } from "react-redux"
import { getUsers, follow, unfollow } from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { WithAuthNavigate } from "../../hoc/WithAuthNavigate";
import { compose } from "redux";
import { getUsersData, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selectors"

// class UsersContainer extends React.Component {
//     componentDidMount() {
//         this.props.getUsers(this.props.currentPage, this.props.pageSize)
//     }
//     onPageChanged = (currentPage) => {
//         this.props.getUsers(currentPage, this.props.pageSize)
//     }
//     render() {
//         return (
//             <>
//                 {this.props.isFetching ? <Preloader /> : null}
//                 <Users {...this.props} onPageChanged={this.onPageChanged} />
//             </>
//         )
//     }
// }

const UsersContainer = ({currentPage, pageSize, getUsers, isFetching, ...props}) => {
    useEffect( () => {
        getUsers(currentPage, pageSize)
    }, [currentPage, pageSize])

    const onPageChanged = (currentPage) => {
        getUsers(currentPage, pageSize)
    }

    return (
        <>
            {isFetching ? <Preloader /> : null}
            <Users {...props} onPageChanged={onPageChanged} currentPage={currentPage} pageSize={pageSize}/>
        </>
    )

}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {getUsers, follow, unfollow}),
    //WithAuthNavigate
)(UsersContainer)






// export default WithAuthNavigate(connect(mapStateToProps, {
//     acceptFollow,
//     acceptUnfollow,
//     getUsers,
//     follow,
//     unfollow
// })(UsersContainer));




// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => { dispatch(followCreator(userId)) },
//         unfollow: (userId) => { dispatch(unfollowCreator(userId)) },
//         setUsers: (users) => { dispatch(setUsersCreator(users)) },
//         setCurrentPage: (currentPage) => { dispatch(setCurrentPageCreator(currentPage)) },
//         setTotalUsersCount: (totalUsersCount) => { dispatch(setTotalUsersCountCreator(totalUsersCount)) },
//         toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingCreator(isFetching))}
//     }
// }

// let UsersContainer = (props) => {
//     if (props.users.length === 0) {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(response => {
//             props.setUsers(response.data.items)
//             props.setTotalUsersCount(response.data.totalCount);
//         })
//     }



//     let onPageChanged = (currentPage) => {
//         props.setCurrentPage(currentPage)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${props.pageSize}`).then(response => {
//             props.setUsers(response.data.items);
//         })
//     }


//         return (
//             <Users totalUsersCount={props.totalUsersCount}
//                 pageSize={props.pageSize}
//                 currentPage={props.currentPage}
//                 users={props.users}
//                 unfollow={props.unfollow}
//                 follow={props.follow}
//                 onPageChanged={onPageChanged} />
//         )


// }
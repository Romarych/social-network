import React, { useEffect } from "react";
import { connect } from "react-redux"
import { getUsers, follow, unfollow } from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getUsersData, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selectors"

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
)(UsersContainer)





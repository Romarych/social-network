import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import { useParams, Navigate } from "react-router-dom";
import { compose } from "redux";
import { WithAuthNavigate } from "../../hoc/WithAuthNavigate";
import Login from "../Login/Login";

// class ProfileContainer extends React.Component {
//     refreshProfile() {
//         let userId = this.props.params.userId
//         if (!userId) {
//             userId = this.props.authorizedUserId
//             if (!userId) {
//                 <Navigate to={"/login"} />
//             }
//         }

//         this.props.getProfile(userId)
//         this.props.getStatus(userId)
//     }
//     componentDidMount() {
//         this.refreshProfile()
//     }

//     // componentDidUpdate(prevProps, prevState, snapshot) {
//     //     if (this.props.params.userId != prevProps.params.userId) {
//     //         this.refreshProfile()
//     //     }
//     // }
//     render() {
//         return (
//             <>
//                 {!this.props.params.userId && !this.props.authorizedUserId ? <Navigate to={"/login"} /> : <Profile {...this.props} />}
                
//             </>
//         )
//     }
// }

const ProfileContainer = (props) => {
    let userId = props.params.userId

    useEffect(() => {
        props.getProfile(userId)
        props.getStatus(userId)
    }, [props.params.userId])

    if (!userId) {
        userId = props.authorizedUserId
        if (!userId) {
            return <Navigate to={"/login"} />
        }
    }

    return (
        <>
            {!props.params.userId && !props.authorizedUserId ? <Navigate to={"/login"} /> : <Profile {...props} />}
        </>
    )
}


const withLocation = ProfileContainer => props => {
    let params = useParams()
    return <ProfileContainer {...props} params={params} />;
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId
})

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
    withLocation,
    //WithAuthNavigate
)(ProfileContainer)
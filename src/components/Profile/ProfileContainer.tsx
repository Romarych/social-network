import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import { useParams, Navigate, Params } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";
import { ProfileType } from "../../types/types";

type StateToPropsType = ReturnType<typeof mapStateToProps>
type DispatchToPropsType = {
    getProfile: (userId: number ) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (files: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileContainer: FC<StateToPropsType & DispatchToPropsType> = (props) => {
    let {userId}: Readonly<Params<string>> = useParams()

    useEffect(() => {
        if (userId) {
            props.getProfile(Number(userId))
            props.getStatus(Number(userId))
        } else throw new Error('userId should exists')
    }, [userId])

    if (!userId) {  
        userId = `${props.authorizedUserId}`
        if (!props.authorizedUserId) {
            return <Navigate to={"/login"} />
        }
    }

    return (
        <>
            {!userId && !props.authorizedUserId
                ? <Navigate to={"/login"} />
                : <Profile isOwner={!userId} {...props} />}
        </>
    )
}

// const withLocation = (ProfileContainer: React.ComponentType) => (props: any) => {
//     const {userId} = useParams()
//     return <ProfileContainer {...props} userId={userId} />;
// };


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId
})

export default connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile})(ProfileContainer)
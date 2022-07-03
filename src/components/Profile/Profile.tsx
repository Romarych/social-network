import React, { FC } from "react";
import { ProfileType } from "../../types/types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
    profile: ProfileType | null
    savePhoto: (files: File) => void
    saveProfile: (profile: ProfileType) =>  Promise<any>
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
}

const Profile: FC<PropsType> = (props) => { 
    return (
        <div>
            <ProfileInfo {...props} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
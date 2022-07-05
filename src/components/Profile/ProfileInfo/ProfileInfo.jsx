import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPhoto from "../../../assets/images/avatar.png"


const ProfileInfo = ({profile, ...props}) => {
  
    if (!profile) {
        return <Preloader />
    }
    return (
        <>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} />
                <div>
                    <div>{profile.fullName}</div>
                    <ProfileStatus {...props} />
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;
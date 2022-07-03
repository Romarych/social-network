import React, {ChangeEvent, FC, useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css"
import userPhoto from "../../../assets/images/avatar.png"
import uploadIcon from "../../../assets/images/upload.png"
import ProfileDataForm, { ProfileDataFormValuesType } from "./ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";
import { ProfileType } from "../../../types/types";


type PropsType = {
    profile: ProfileType | null
    savePhoto: (files: File) => void
    saveProfile: (formData: any) => Promise<any>
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo:FC<PropsType> = ({profile, savePhoto, saveProfile, ...props}) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onUserPhotoSelected = (e: ChangeEvent<HTMLInputElement >) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileDataFormValuesType) => {
        saveProfile(formData).then(() => {setEditMode(false)})
    }

    return (
        <div className={s.descriptionBlock}>
            <div className={s.avatarWrapper}>
                <img className={s.avatar} src={profile.photos.large || userPhoto}/>
                {props.isOwner &&
                    <div className={s.input__wrapper}>
                        <input onChange={onUserPhotoSelected} name="file" type="file" id="input__file"
                               className={`${s.input} ${s.input__file}`} multiple/>
                        <label htmlFor="input__file" className={s.input__file_button}>
                            <span className={s.input__file_icon_wrapper}>
                                <img className={s.input__file_icon} src={uploadIcon}/>
                            </span>
                            <span className={s.input__file_button_text}>Изменмть aватар</span>
                        </label>
                    </div>
                }
            </div>
            {editMode ?
                <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile} {...props} />
                : <ProfileData goToEditMode={() => {setEditMode(true)
            }} profile={profile} {...props} />}
        </div>)
}

export default ProfileInfo;
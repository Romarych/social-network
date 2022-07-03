import ProfileStatus from "../ProfileStatus/ProfileStatus";
import s from "../ProfileInfo.module.css";
import React, { FC, MouseEventHandler } from "react";
import { ContactsType, ProfileType } from "../../../../types/types";

type PropsType = {
    profile: ProfileType
    goToEditMode: MouseEventHandler<HTMLButtonElement>
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

const ProfileData: FC<PropsType> = ({profile, goToEditMode, ...props}) => {
    return (
        <div>
            <div><b>FullName: </b>{profile.fullName}</div>
            <div><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
            {profile.lookingForAJob &&
                <div><b>My professional skills:</b> {profile.lookingForAJobDescription}</div>}
            <div><b>About me:</b> {profile.aboutMe}</div>
            <ProfileStatus {...props} />
            <div><b>Contacts: </b> {Object.keys(profile.contacts).map((key) => {
                return <Contact key={key} contactsTitle={key} contactsValue={profile.contacts[key as keyof ContactsType]} />
            })}</div>
            {props.isOwner && <button onClick={goToEditMode}>Edit</button>}
        </div>
    )
}

type ContactPropsType = {
    contactsTitle: string
    contactsValue: string
}

const Contact: FC<ContactPropsType> = ({contactsTitle, contactsValue}) => {
    return <div className={s.contact}><b>{contactsTitle}:</b> {contactsValue}</div>
}

export default ProfileData
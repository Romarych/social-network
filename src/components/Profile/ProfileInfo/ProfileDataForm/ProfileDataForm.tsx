import React, { FC } from "react";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import {createField, GetStringKeys, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from "../ProfileInfo.module.css"
import style from "../../../common/FormsControls/FormsControls.module.css"
import { ContactsType, ProfileType } from "../../../../types/types";

export type ProfileDataFormValuesType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: ContactsType
}

type ProfileDataFormOwnPropsType = {
    profile: ProfileType
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
}

type ProfileDataFormValuesKeysType = GetStringKeys<ProfileDataFormValuesType>


const ProfileDataForm: FC<InjectedFormProps<ProfileDataFormValuesType, ProfileDataFormOwnPropsType> & ProfileDataFormOwnPropsType> 
    = ({handleSubmit, error, profile, ...props}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>FullName: </b>{createField<ProfileDataFormValuesKeysType>("Full Name", "fullName", [], Input, "", "")}
            </div>
            <div>
                <b>Looking for a job:</b> {createField<ProfileDataFormValuesKeysType>("", "lookingForAJob", [], Input, "checkbox", "")}
            </div>
            <div>
                <b>My professional
                    skills:</b> {createField<ProfileDataFormValuesKeysType>("My professional skills", "lookingForAJobDescription", [], Textarea, "", "")}
            </div>
            <div>
                <b>About me:</b> {createField<ProfileDataFormValuesKeysType>("About me", "aboutMe", [], Textarea, "", "")}
            </div>
            <ProfileStatus {...props} />
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    {/* todo: create some solution for ambedded object */}
                    <b>{key}:</b> {createField(key, `contacts.${key}`, [], Input, "", "")}
                </div>
            })}</div>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <br/>
            {props.isOwner && <button>Save</button>}
        </form>
    )
}

const ProfileDataReduxForm = reduxForm<ProfileDataFormValuesType, ProfileDataFormOwnPropsType>({form: "profile"})(ProfileDataForm)

export default ProfileDataReduxForm
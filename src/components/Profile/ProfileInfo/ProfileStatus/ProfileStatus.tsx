import React, {ChangeEvent, useEffect, useState} from "react";
import { FC } from "react";
import s from "./ProfileStatus.module.css"

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

const ProfileStatus: FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <div>
            <div className={props.isOwner ? s.status : undefined}>
                {!editMode &&
                    <div>
                        <b>Status:</b> <span onDoubleClick={activateEditMode}>{props.status || "Add status"}</span>
                    </div>
                }
                {editMode &&
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                           defaultValue={status}/>
                }
            </div>
        </div>
    )
}

export default ProfileStatus;
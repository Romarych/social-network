import React, { useEffect, useState } from "react";
import s from "./ProfileStatus.module.css"

const ProfileStatus = (props) => {
    
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status] )

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value) 
    }

    return (
        <div>
            <div className={s.status}>
                {!editMode &&
                    <span onDoubleClick={activateEditMode} >{props.status || "Add status"}</span>
                }
                {editMode &&
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} defaultValue={status} />
                }
            </div>
        </div>
    )
}

export default ProfileStatus;
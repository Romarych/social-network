import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css"

type PropsType = {
    id: number
    name: string
}

const DialogItem: FC<PropsType> = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
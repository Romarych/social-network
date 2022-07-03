import React, { FC } from "react";
import s from "./Friends.module.css";

type PropsType = {
    src: string
    name: string
}

const Friend: FC<PropsType> = (props) => {
    return (
        <div>
            <div className={s.friend}>
                <img src={props.src} alt={props.name} />
                <div>{props.name}</div>                         
            </div>     
        </div>

    )
}

export default Friend;
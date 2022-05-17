import React from "react";
import s from "./Friends.module.css";



const Friends = (props) => {
    return (
        <div>
            <div className={s.friend}>
                <img src={props.src} alt={props.name} />
                <div>{props.name}</div>                         
            </div>     
        </div>

    )
}

export default Friends;
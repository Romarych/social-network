import React from "react";
import s from "./Friends.module.css";



const Friends = (props) => {
    return (
        <div>
            <div className={s.friend}>
                <img src={props.src} alt={props.name} />
                <div>{props.name}</div>                         
            </div>
            {/* <div className={s.friend}>
            <img src={props.friends[0].src} alt="" />
                <div>{props.friends[0].name}</div>
            </div>
            <div className={s.friend}>
            <img src={props.friends[1].src} alt="" />
                <div>{props.friends[1].name}</div>
            </div>
            <div className={s.friend}>
            <img src={props.friends[2].src} alt="" />
                <div>{props.friends[2].name}</div>
            </div>
            <div className={s.friend}>
            <img src={props.friends[3].src} alt="" />
                <div>{props.friends[3].name}</div>
            </div>
            <div className={s.friend}>
            <img src={props.friends[4].src} alt="" />
                <div>{props.friends[4].name}</div>
            </div>
            <div className={s.friend}>
            <img src={props.friends[5].src} alt="" />
                <div>{props.friends[5].name}</div>
            </div> */}      
        </div>

    )
}

export default Friends;
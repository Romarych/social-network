import React from "react";
import s from "./User.module.css";
import userPhoto from "../../../assets/images/user.png"
import { NavLink } from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={s.users}>
            <div className={s.photo} >
                <NavLink to={"/profile/" + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                </NavLink>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {unfollow(user.id)}}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {follow(user.id)}}>Follow</button>}
            </div>
            <div className={s.flex}>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div className={s.flex}>
                <div >{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
            </div>
        </div>

    )
}

export default User;
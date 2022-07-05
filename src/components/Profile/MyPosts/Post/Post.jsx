import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdn2.iconfinder.com/data/icons/avatars-60/5985/40-School_boy-50.png" alt="" />
            <div>{props.massage}</div>
            <br />
            <span>Like {props.likes}</span>
        </div>
    )
}

export default Post;
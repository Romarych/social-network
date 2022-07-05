import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/ZDF_logo%21_Logo_2021.svg"></img>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Logout</button></div> 
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>       
    )
}

export default Header;
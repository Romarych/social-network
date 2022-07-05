import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";
import s from "./Navbar.module.css";

const Navbar = (props) => {
    let state = props.store.getState()

    let friendsElements = state.navbar.friends.map(f => <Friends name={f.name} src={f.src} id={f.id} key={f.key} />)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? s.active : ""}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? s.active : ""}>Massages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={({ isActive }) => isActive ? s.active : ""}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={({ isActive }) => isActive ? s.active : ""}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={({ isActive }) => isActive ? s.active : ""}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={({ isActive }) => isActive ? s.active : ""}>Settings</NavLink>
            </div>
            <div>
                <div className={s.item}>
                    <NavLink to="/friends" className={({ isActive }) => isActive ? s.active : ""}>Friends</NavLink>
                </div>
                <div className={s.friends}>
                    {friendsElements}
                    {/* <Friends friends={props.navbar.friends}/> */}
                </div>               
            </div>
        </nav>
    )
}

export default Navbar;
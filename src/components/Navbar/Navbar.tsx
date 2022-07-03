import React, { FC } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FriendType } from "../../redux/navbar-reducer";
import { AppStateType } from "../../redux/redux-store";
import Friend from "../Friends/Friend";
import s from "./Navbar.module.css";

type StatePropsType = {
    friends:  Array<FriendType>
}

const Navbar: FC<StatePropsType> = (props) => {
    let friendsElements = props.friends.map(f => <Friend name={f.name} src={f.src} key={f.key} />)
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
                </div>               
            </div>
        </nav>
    )
}

export default connect<StatePropsType, {}, {}, AppStateType>((state: AppStateType) => ({friends: state.navbar.friends}))(Navbar)
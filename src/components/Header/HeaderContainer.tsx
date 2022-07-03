import React from "react";
import Header, { DispatchPropsType, StatePropsType } from "./Header"
import { connect } from "react-redux";
import { logout} from "../../redux/auth-reduser"
import { AppStateType } from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect<StatePropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(Header);
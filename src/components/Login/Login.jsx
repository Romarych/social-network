import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth-reduser";
import LoginReduxForm from "./LoginForm/LoginForm";

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        let {email, password, rememberMe} = formData
        login(email, password, rememberMe)
    }
    if (isAuth) {
        return <Navigate to={"/profile"} />
    } 

    return <div>
        <h1>Login</h1>
       <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)




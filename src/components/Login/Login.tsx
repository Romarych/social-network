import React, { FC } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth-reduser";
import LoginReduxForm from "./LoginForm/LoginForm";
import { AppStateType } from "../../redux/redux-store";
import { LoginFormValuesType } from "./LoginForm/LoginForm";

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchToPropsType = {
   login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login: FC<MapStateToPropsType & MapDispatchToPropsType> = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        let {email, password, rememberMe, captcha} = formData
        login(email, password, rememberMe, captcha)
    }
    if (isAuth) {
        return <Navigate to={"/profile"} />
    } 

    return <div>
        <h1>Login</h1>
        <div><b>Данные тестового аккаунта:</b></div>
        <div><b>Email:</b> free@samuraijs.com</div>
        <div><b>Password:</b> free</div>
        <div>Если несколько раз подряд отправить <br/> неверные данные появится <b>captcha</b></div>
       <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login)




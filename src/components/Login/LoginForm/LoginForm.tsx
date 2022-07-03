import React, {FC} from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { createField, GetStringKeys, Input } from "../../common/FormsControls/FormsControls";
import s from "../../common/FormsControls/FormsControls.module.css"

type LoginFormOwnProps = {
    captchaUrl: string | null
}

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormValuesKeysType = GetStringKeys<LoginFormValuesType>


const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({handleSubmit, error, captchaUrl}) => {
    return <div>
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesKeysType>("Email", "email", [required], Input, "email", "")}
            {createField<LoginFormValuesKeysType>("Password", "password", [required], Input, "password", "")}
            {createField<LoginFormValuesKeysType>(undefined, "rememberMe", [], Input, "checkbox", s.rememberMe)}

            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                {captchaUrl && <img className={s.captcha} src={captchaUrl} alt=""/>}
                {captchaUrl && createField<LoginFormValuesKeysType>("Simbols from image", "captcha", [required], Input, "text", "" )}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: "login"})(LoginForm)


export default LoginReduxForm
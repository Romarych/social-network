import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { createField, Input } from "../../common/FormsControls/FormsControls";
import s from "../../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return <div>
        <form onSubmit={handleSubmit}>
                {createField("Email", "email", [required], Input, "email")}
                {createField("Password", "password", [required], Input, "password")}
                {createField(null, "rememberMe", null, Input, "checkbox", "Remember me")} 

                {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)


export default LoginReduxForm
import React from "react"
import { Field } from "redux-form"
import s from "./FormsControls.module.css"

export const FormsControls = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={`${hasError && s.formControl} ${hasError && s.error}`}>
            {children}
            <br />
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return <FormsControls {...props}><textarea {...input} {...restProps} /></FormsControls>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return <FormsControls {...props}><input {...input} {...restProps} /></FormsControls>
}

export const createField = (placeholder, name, validate, component, type, text) => (
    <div>
        <Field placeholder={placeholder} name={name} validate={validate} component={component} type={type} />{text}
    </div>
)

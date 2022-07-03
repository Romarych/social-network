import React, { FC, ReactNode } from "react"
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form"
import { FieldValidatorType } from "../../../utils/validators/validators"
import s from "./FormsControls.module.css"

export type FormsControlPropsType = {
    meta: WrappedFieldMetaProps
    children: ReactNode
}

export const FormsControls: FC<FormsControlPropsType> = ({ meta: { touched, error }, children }) => {
    const hasError = touched && error
    return (
        <div className={`${hasError && s.formControl} ${hasError && s.error}`}>
            {children}
            <br />
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return <FormsControls {...props}><textarea {...input} {...restProps} /></FormsControls>
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return <FormsControls {...props}><input {...input} {...restProps} /></FormsControls>
}

export function createField<FormKeysType extends string | undefined>(
    placeholder: string | undefined,
    name:   FormKeysType,
    validate: Array<FieldValidatorType>,
    component: React.FC<WrappedFieldProps>,
    type: string, className: string
) {
    return <div className={s.input}>
        <Field className={className} placeholder={placeholder} name={name} validate={validate} component={component}
            type={type} />
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>
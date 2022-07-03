import React, { FC } from "react";
import { InjectedFormProps } from "redux-form";
import { reduxForm } from "redux-form";
import { required } from "../../../../utils/validators/validators";
import { createField, GetStringKeys, Textarea } from "../../../common/FormsControls/FormsControls";


// type NewPostFormValuesKeysType = Extract<keyof NewPostFormValuesType, string>
type NewPostFormValuesKeysType = GetStringKeys<MyPostsFormValuesType>


export type MyPostsFormValuesType = {
    post: string
}

const MyPostsForm: FC<InjectedFormProps<MyPostsFormValuesType>>
= ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        {createField<NewPostFormValuesKeysType>("Enter your post", "post", [required], Textarea, "", "")}
        <br />
        <button>Add post</button>
    </form>
}

const MyPostsReduxForm = reduxForm<MyPostsFormValuesType>({ form: "MyPostsForm" })(MyPostsForm)

export default MyPostsReduxForm;
import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100)

const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name="post" placeholder="Enter your post"
            component={Textarea} validate={[required, maxLength100]} />
        <br />
        <button>Add post</button>
    </form>
}

const MyPostsReduxForm = reduxForm({ form: "MyPostsForm" })(MyPostsForm)

export default MyPostsReduxForm;
import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100)

const MessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={"newMessageText"} validate={[required, maxLength100]} placeholder={"Enter your message" }/>
        <br />
        <button>Add Post</button>
    </form>
}

const MessageFormRedux = reduxForm({form: "MessageForm"})(MessageForm)

export default MessageFormRedux;
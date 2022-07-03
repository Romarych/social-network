import React, { FC } from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { createField, Textarea } from "../../common/FormsControls/FormsControls";
import { NewMesageFormValuesType } from "../Dialogs";

const maxLength100 = maxLengthCreator(100)

type NewMesageFormValuesKeysType = Extract<keyof NewMesageFormValuesType, string>

const MessageForm: FC<InjectedFormProps<NewMesageFormValuesType>>
= ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        {createField<NewMesageFormValuesKeysType>("Enter your message", "newMessageText", [required, maxLength100], Textarea, "", "")}
        <br />
        <button>Add Post</button>
    </form>
}

const MessageFormRedux = reduxForm<NewMesageFormValuesType>({form: "MessageForm"})(MessageForm)

export default MessageFormRedux;
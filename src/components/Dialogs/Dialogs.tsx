import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"
import MessageFormRedux from "./MessageForm/MessageForm";
import { FC } from "react";
import { DialogType, MessageType } from "../../redux/dialogs-reducer"

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    sendMessage: (newMessageText: string) => void

}

export type NewMesageFormValuesType = {
    newMessageText: string
}

const Dialogs: FC<PropsType> = (props) => {
  
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} />)

    const addNewMessage = (values: NewMesageFormValuesType) => {
        props.sendMessage(values.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <MessageFormRedux onSubmit={addNewMessage} {...props}/>
            </div>
        </div>
    )
}

export default Dialogs
import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem";
import MessageFormRedux from "./MessageForm/MessageForm";

const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id} />)

    const addNewMessage = (values) => {
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

export default Dialogs;
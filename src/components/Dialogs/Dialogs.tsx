import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../Redux/Store";


type PropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}
const Dialogs = (props: PropsType) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
        // props.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        // props.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter Your Message...'/></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Button, TextareaAutosize} from '@material-ui/core'
import {Redirect} from 'react-router-dom';
import {DialogsComponentType, dialogsDataType, MessagesType} from "./DialogsContainer";

export type DialogsPageType = {
    dialogs: dialogsDataType[]
    messages: Array<MessagesType>
    newMessageBody: string
}
const Dialogs = (props: DialogsComponentType) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div><TextareaAutosize
                    rowsMin={2}
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='Enter Your Message...'/></div>
                <div>
                    <Button color={'primary'} variant={"contained"} size={'small'}
                            onClick={onSendMessageClick}>Send</Button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

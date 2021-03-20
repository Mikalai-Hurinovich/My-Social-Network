import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../Redux/DialogsReducer";
import {StoreType} from "../../Redux/Store";
import Dialogs from "./Dialogs";


type PropsType = {
    // dialogsPage: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
    store: StoreType
}
const DialogsContainer = (props: PropsType) => {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}
                 dispatch={props.store.dispatch}/>
    )
}

export default DialogsContainer;

import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ReduxRootState} from "../../Redux/Redux-store";
export type DialogsPageType = {
    dialogs: dialogsDataType[]
    messages: Array<MessagesType>
    newMessageBody: string
}
export type dialogsDataType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type OwnPropsType = {}

let mapStateToProps = (state: ReduxRootState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC()
            )
        }
    }
}

const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, ReduxRootState>(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;

import React from 'react';
import {sendMessageAC} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {ReduxRootState} from "../../Redux/Redux-store";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";

export type DialogsPageType = {
    dialogs: dialogsDataType[]
    messages: Array<MessagesType>
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
}

export type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void
}

export type OwnPropsType = {}

let mapStateToProps = (state: ReduxRootState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody)
            )
        }
    }
}
export type DialogsComponentType = {
    dialogsPage: DialogsPageType
    sendMessage: (newMessageBody: string) => void
    isAuth: boolean
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, ReduxRootState>(mapStateToProps, mapDispatchToProps),
)(Dialogs);

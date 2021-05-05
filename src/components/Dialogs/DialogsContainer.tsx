import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {ReduxRootState} from "../../Redux/Redux-store";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";

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
}

export type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type OwnPropsType = {}

let mapStateToProps = (state: ReduxRootState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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
export type DialogsComponentType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    isAuth: boolean
}


// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, ReduxRootState>(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default compose<React.ComponentType>(
    withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, ReduxRootState>(mapStateToProps, mapDispatchToProps),
)(Dialogs);

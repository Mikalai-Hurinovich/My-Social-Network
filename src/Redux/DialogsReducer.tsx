import {ActionsTypes, DialogsPageType} from "./State";

const UpdateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY'
const SendMessage = 'SEND-MESSAGE'

const DialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case UpdateNewMessageBody:
            state.newMessageBody = action.body;
            break;
        case SendMessage:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            break;
    }
    return state;
}

export default DialogsReducer;

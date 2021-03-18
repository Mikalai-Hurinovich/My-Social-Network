import {ActionsTypes, DialogsPageType} from "./State";

const UpdateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY'
const SendMessage = 'SEND-MESSAGE'

const DialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    if (action.type === UpdateNewMessageBody) {
        state.newMessageBody = action.body;
    } else if (action.type === SendMessage) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: 6, message: body});
    }
    return state;
}

export default DialogsReducer;

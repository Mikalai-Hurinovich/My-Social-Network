import {ActionsTypes, DialogsPageType, SendMessage, UpdateNewMessageBody} from "./Store";

let initialState = {
    dialogs: [
        {id: 1, name: "Микола"},
        {id: 2, name: "Дима"},
        {id: 3, name: "Малыха"},
        {id: 4, name: "Арчибальд"},
        {id: 5, name: "Витя"},
        {id: 6, name: "Артур"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "See you!"},
        {id: 3, message: "Yesterday was awesome!"},
        {id: 4, message: "Good Morning!"},
        {id: 5, message: "Chao!"},
        {id: 6, message: "Aufwiedersehen!"}],
    newMessageBody: ''
}


const DialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UpdateNewMessageBody:
            state.newMessageBody = action.body;
            return state;
        case SendMessage:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: SendMessage} as const)
export const updateNewMessageBodyAC = (body: string) => ({type: UpdateNewMessageBody, body: body} as const)
export default DialogsReducer;

import {DialogsPageType} from "../components/Dialogs/Dialogs";

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
        {id: 1, message: "Frontend?"},
        {id: 2, message: "Let's go to Baikal!!!!"},
        {id: 3, message: "Stop sitting at the computer, I want to go on vacation !!1"},
        {id: 4, message: "Good Morning!"},
        {id: 5, message: "Chao!"},
        {id: 6, message: "Aufwiedersehen!"}],

}

const DialogsReducer = (state: DialogsPageType = initialState, action: SendMessageActionType): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}] // вместо метода push использ. spread
            }
        default:
            return state;
    }
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE',
    newMessageBody: string
}
export const sendMessageAC = (newMessageBody: string): SendMessageActionType => ({type: 'SEND-MESSAGE', newMessageBody})
export default DialogsReducer;

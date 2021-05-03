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
    newMessageBody: ''
}

export type DialogsActionsTypes = SendMessageActionType | UpdateNewMessageBodyActionType


const DialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsTypes): DialogsPageType => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {...stateCopy, newMessageBody: action.body};
        case 'SEND-MESSAGE':
            let body = stateCopy.newMessageBody;
            return stateCopy = {
                ...stateCopy,
                newMessageBody: '',
                messages: [...stateCopy.messages, {id: 6, message: body}] // вместо метода push использ. spread
            }
        default:
            return stateCopy;
    }
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}
export const sendMessageAC = (): SendMessageActionType => ({type: 'SEND-MESSAGE'})

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export const updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyActionType => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: body
})
export default DialogsReducer;

import ProfileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./ProfileReducer";
import DialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./DialogsReducer";
import SideBarReducer from "./SideBarReducer";

export const AddPost = 'ADD-POST';
export const UpdateNewPostText = 'UPDATE-NEW-POST-TEXT';
export const UpdateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY'
export const SendMessage = 'SEND-MESSAGE'

export type  RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}
export type ProfilePageType = {
    posts: PostsDataType[]
    newPostText: string

}
export type PostsDataType = {
    id: number
    message: string
    count: number
}
export type DialogsPageType = {
    dialogs: dialogsDataType[]
    messages: Array<MessagesType>
    newMessageBody: string
}
export type SideBarType = {
    friends: Array<FriendsType>
}
export type dialogsDataType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type FriendsType = {
    id: number
    name: string
    img: string
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    dispatch: (action: ActionsTypes) => void
    subscribe: (observer: (state: RootStateType) => void) => void
}

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type SendMessageType = {
    type: 'SEND-MESSAGE'
}
export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type UpdateNewMessageBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, How are you?', count: 10},
                {id: 2, message: 'Good luck, in React)', count: 100},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
                {id: 4, message: "Give me your Money!!!!!"},
                {id: 5, message: "Chao!"},
                {id: 6, message: "Aufwiedersehen!"}],
            newMessageBody: ''
        },
        sideBar: {
            friends: [
                {id: 1, name: "Микола", img: 'https://html5css.ru/w3images/avatar2.png'},
                {
                    id: 2,
                    name: "Дима",
                    img: 'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
                },
                {id: 3, name: "Малыха", img: 'https://html5css.ru/howto/img_avatar2.png'},
            ]
        }
    },
    _callSubscriber(state: RootStateType) {
        console.log('state was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer; // pattern observer, по этому же паттерну работает addEventListener
    },
    dispatch(action: ActionsTypes) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = SideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}
// автоматически создать типизацию для ф-ий с пом. конструкции ReturnType<typeof *Имя ф-ии*> и также добавляем as const
// каждому объекту из ф-ии, чтобы объкты воспринимались как константа

export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof updateNewMessageBodyAC>


export default store;
//@ts-ignore
window.store = store;

import {rerenderEntireTree} from "../../render";

export type AppStateType = {
    state: StateDataType
    addPost: (postMessage: string) => void
}
export type StateDataType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}
export type ProfilePageType = {
    posts: PostsDataType[]

}
export type PostsDataType = {
    id: number
    message: string
    count: number
}
export type DialogsPageType = {
    dialogs: dialogsDataType[]
    messages: Array<MessagesType>
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
export let state: StateDataType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, How are you?', count: 10},
            {id: 2, message: 'Good luck, in React)', count: 100},
        ],
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
            {id: 4, message: "Good Morning!"},
            {id: 5, message: "Chao!"},
            {
                id: 6,
                message: "Aufwiedersehen! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut\\n' +\n" +
                    "'debitis, reiciendis! Alias aperiam corporis ea impedit ipsam laudantium nihil perferendis\\n' +\n" +
                    "'praesentium recusandae? Dignissimos enim ipsum, itaque maiores nam rerum ut."
            }],

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

}
export const addPost = (postMessage: string) => {
    let newPost: PostsDataType = {id: 3, message: postMessage, count: 0}
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
};

export default state;

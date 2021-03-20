import {ActionsTypes, AddPost, PostsDataType, ProfilePageType, UpdateNewPostText} from "./Store";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, How are you?', count: 10},
        {id: 2, message: 'Good luck, in React)', count: 100},
    ],
    newPostText: ''
}
const ProfileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case AddPost:
            let newPost: PostsDataType = {id: 3, message: state.newPostText, count: 0}
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UpdateNewPostText:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: AddPost} as const)
export const updateNewPostTextActionCreator = (textInTextarea: string) => ({
    type: UpdateNewPostText,
    newText: textInTextarea
} as const)
export default ProfileReducer;

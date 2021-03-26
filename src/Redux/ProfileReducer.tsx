import {PostsDataType, ProfilePageType} from "./Store";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, How are you?', count: 10},
        {id: 2, message: 'Good luck, in React)', count: 100},
    ],
    newPostText: ''
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ProfileActionsTypes = UpdateNewPostTextType | AddPostActionType

const ProfileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes): ProfilePageType => {
    const stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsDataType = {id: 3, message: state.newPostText, count: 0}
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        case 'UPDATE-NEW-POST-TEXT':
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return stateCopy;
    }
}
export type addPostActionType = {
    type: 'ADD-POST'
}
export const addPostActionCreator = (): addPostActionType => ({type: 'ADD-POST'})
export type updateNewPostTextAC = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
export const updateNewPostTextAC = (textInTextarea: string): updateNewPostTextAC => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: textInTextarea
})
export default ProfileReducer;

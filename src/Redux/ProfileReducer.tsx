import {ProfilePageType} from "./Store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, How are you?', count: 10},
        {id: 2, message: 'Good luck, in React)', count: 100},
    ],
    newPostText: '',
    profile: null
}
export type SetUserProfileType = {
    type: 'SET-USER-PROFILE'
    profile: null
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ProfileActionsTypes = UpdateNewPostTextType | AddPostActionType | SetUserProfileType

const ProfileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes) => {
    const stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 3, message: state.newPostText, count: 0}
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return stateCopy;
    }
}

export const setUserProfile = (profile: null): SetUserProfileType => ({type: SET_USER_PROFILE, profile})
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextAC = (textInTextarea: string): UpdateNewPostTextType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: textInTextarea
})
export default ProfileReducer;

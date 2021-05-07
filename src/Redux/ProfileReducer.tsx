import {Dispatch} from "redux";
import {profileAPI, UsersApi} from "../api/api";
import {ProfilePageType} from "../components/Profile/Profile";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, How are you?', count: 10},
        {id: 2, message: 'Good luck, in React)', count: 100},
    ],
    newPostText: '',
    profile: null,
    status: ''
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
export type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}

export type ProfileActionsTypes = UpdateNewPostTextType | AddPostActionType | SetUserProfileType | SetStatusType

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
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return stateCopy;
    }
}

// Thunk types
export type getStatusType = (userId: number) => (dispatch: Dispatch) => void;
export type updateStatusType = (status: string) => (dispatch: Dispatch) => void
export type getUserProfileType = (userId: number) => (dispatch: Dispatch) => void;
// Thunks
export const getUserProfile: getUserProfileType = (userId: number) => (dispatch: Dispatch) => {
    UsersApi.profileLink(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}
export const getStatus: getStatusType = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data))
    })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
// AC
export const setUserProfile = (profile: null): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status});
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextAC = (textInTextarea: string): UpdateNewPostTextType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: textInTextarea
})
export default ProfileReducer;

import {Dispatch} from "redux";
import {profileAPI, UsersApi} from "../api/api";
import {ProfilePageType} from "../components/Profile/Profile";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, How are you?', count: 10},
        {id: 2, message: 'Good luck, in React)', count: 100},
    ],
    profile: null,
    status: ''
}
export type SetUserProfileType = {
    type: 'SET-USER-PROFILE'
    profile: null
}
export type AddPostActionType = {
    type: 'ADD-POST',
    newPostText: string
}
export type DeletePostActionType = {
    type: 'DELETE_POST',
    postId: number
}
export type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}

export type ProfileActionsTypes = AddPostActionType | SetUserProfileType | SetStatusType | DeletePostActionType

export const ProfileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes) => {
    const stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 3, message: action.newPostText, count: 0}
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case "DELETE_POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
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
        dispatch(setUserProfileAC(data))
    })
}
export const getStatus: getStatusType = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatusAC(data))
    })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}
// AC
export const setUserProfileAC = (profile: null): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
export const setStatusAC = (status: string): SetStatusType => ({type: SET_STATUS, status});
export const addPostAC = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText})
export const deletePostAC = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})
export default ProfileReducer;

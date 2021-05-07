import React from "react";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTH_LOADING = 'SET_AUTH_LOADING'

export type AuthType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
    loading: boolean
}

export let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    loading: true
}
type setAuthUserDataType = {
    data: AuthType;
    type: typeof SET_USER_DATA, id: number
}
type setAuthUserLoading = {
    type: typeof SET_AUTH_LOADING, data: boolean
}

type ActionType = setAuthUserDataType | setAuthUserLoading
const AuthReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_AUTH_LOADING: {
            return {
                ...state,
                loading: action.data
            }
        }
        default:
            return state;

    }
}
export type getAuthUserDataType = () =>  void

export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, login, email}
});
export const setAuthLoading = (val: boolean) => ({
    type: SET_AUTH_LOADING,
    data: val
});
export const getAuthUserData: getAuthUserDataType = () => (dispatch: Dispatch) => {
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setAuthUserData(id, email, login))
        }
    }).finally(() => dispatch(setAuthLoading(false)))
}

export default AuthReducer;

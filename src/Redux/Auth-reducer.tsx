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
export type getAuthUserDataType = () => any

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id, login, email, isAuth}
});
export const setAuthLoading = (val: boolean) => ({
    type: SET_AUTH_LOADING,
    data: val
});
export const getAuthUserData: getAuthUserDataType = () => (dispatch: Dispatch) => {
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }).finally(() => dispatch(setAuthLoading(false)))
}
export const login = (email: string, password: any, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    }).finally(() => dispatch(setAuthLoading(false)))
}
export const logout = (email: string, password: any, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }).finally(() => dispatch(setAuthLoading(false)))
}

export default AuthReducer;

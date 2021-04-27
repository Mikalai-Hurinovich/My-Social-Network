import React from "react";
import {Dispatch} from "redux";
import {UsersApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
export type AuthType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

export let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
type setAuthUserDataType = {
    data: AuthType;
    type: typeof SET_USER_DATA, id: number
}

type ActionType = setAuthUserDataType
const AuthReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
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
export const getAuthUserData: getAuthUserDataType = () => (dispatch: Dispatch) => {
    UsersApi.authMe().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export default AuthReducer;

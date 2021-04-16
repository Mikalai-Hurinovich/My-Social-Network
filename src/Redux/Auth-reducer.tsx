import React from "react";

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

export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, login, email}
});


export default AuthReducer;

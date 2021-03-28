import React from "react";

const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'


export type UsersType = {
    users: UserType[]
}
export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
export type LocationType = {
    city: string
    country: string
}
let initialState: UsersType = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Микола",
            status: 'Hello, IT!',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: false,
            fullName: "Дима",
            status: 'Hello, Travel!',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            followed: true,
            fullName: "Малыха",
            status: 'Hello, Life!',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 4,
            followed: false,
            fullName: "Арчибальд",
            status: 'Hello, Phila!',
            location: {city: 'Philadelphia', country: 'USA'}
        },
        {
            id: 5,
            followed: true,
            fullName: "Витя",
            status: 'Hello, Chicago!',
            location: {city: 'Chicago', country: 'USA'}
        },
        {
            id: 6,
            followed: false,
            fullName: "Артур",
            status: 'Hello, Boston!',
            location: {city: 'Boston', country: 'USA'}
        },
    ]
}
type followACType = { type: typeof FOLLOW, userID: number }
type unfollowACType = { type: typeof UNFOLLOW, userID: number }
type setUsersACType = { type: typeof SET_USERS, users: UserType[] }
type ActionType = followACType | unfollowACType | setUsersACType
const UsersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }

}


export const followAC = (userID: number) => ({type: FOLLOW, userID});
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users})
export default UsersReducer;

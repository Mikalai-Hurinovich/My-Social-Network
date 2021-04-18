import React from "react";

const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
export type UsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    message: string
    location: LocationType

}
export type PhotosType = {
    small: string
    large: string
}
export type LocationType = {
    city: string
    country: string
}
export let initialState: UsersType = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
type followACType = { type: typeof FOLLOW, userID: number }
type unfollowACType = { type: typeof UNFOLLOW, userID: number }
type setUsersACType = { type: typeof SET_USERS, users: UserType[] }
type setCurrentPage = { type: typeof SET_CURRENT_PAGE, currentPage: number }
type setUsersTotalCount = { type: typeof SET_TOTAL_USERS_COUNT, totalCount: number }
type setIsFetching = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
type setFollowInProgress = {
    userId: number
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean }
type ActionType = followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPage
    | setUsersTotalCount
    | setIsFetching
    | setFollowInProgress
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}


export const follow = (userID: number) => ({type: FOLLOW, userID});
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID});
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export default UsersReducer;

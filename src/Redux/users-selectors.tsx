import {ReduxRootState} from "./Redux-store";

export const getUsers = (state: ReduxRootState) => {
    return state.usersPage.users
}
export const getPageSize = (state: ReduxRootState) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: ReduxRootState) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: ReduxRootState) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: ReduxRootState) => {
    return state.usersPage.isFetching
}
export const getToggleFollowInProgress = (state: ReduxRootState) => {
    return state.usersPage.followingInProgress
}

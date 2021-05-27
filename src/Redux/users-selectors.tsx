import {ReduxRootState} from "./Redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: ReduxRootState) => {
    return state.usersPage.users;
}

export const getUsersReselect = createSelector(getUsersSelector, (users) => users.filter(u => true))

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

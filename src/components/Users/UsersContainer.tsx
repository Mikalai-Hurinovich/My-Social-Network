import React from "react";
import {connect} from "react-redux";
import Users from "../Users";
import {ReduxRootState} from "../../Redux/Redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UserType
} from "../../Redux/users-reducer";
import UsersClassComponent from "../UsersClassComponent";

export type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

type OwnPropsType = {}


// приниамает весь стейт приложения и возвращает только объект, с необходимыми данными
export function mapStateToProps(state: ReduxRootState) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

// mapDispatchToProps передает дочерней компоненте (Users) через пропсы callbacks
function mapDispatchToProps(dispatch: Dispatch) {
    return {
        follow: (userID: number) => {
            // мы диспатчим не сам AC, а результат его работы, action
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            // мы диспатчим не сам AC, а результат его работы, action
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UserType[]) => {
            // мы диспатчим не сам AC, а результат его работы, action
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }

    }
}

// Создает контейнерную компоненту
const UsersContainer =
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, ReduxRootState>(mapStateToProps, mapDispatchToProps)(UsersClassComponent);
export default UsersContainer;

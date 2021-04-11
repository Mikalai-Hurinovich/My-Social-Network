import React from "react";
import {connect} from "react-redux";
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

import axios from "axios";
import Users from "./Users";

type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersApiClassComponent extends React.Component<PropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      setCurrentPage={this.props.setCurrentPage}
                      setTotalUsersCount={this.props.setTotalUsersCount}
                      setUsers={this.props.setUsers}
        />
    }
}

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

// mapDispatchToProps передает дочерней компоненте (UsersApiComponent) через пропсы callbacks
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
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, ReduxRootState>(mapStateToProps, mapDispatchToProps)(UsersApiClassComponent);
export default UsersContainer;

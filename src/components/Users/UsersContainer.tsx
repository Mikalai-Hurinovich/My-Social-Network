import React from "react";
import {connect} from "react-redux";
import {ReduxRootState} from "../../Redux/Redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    UserType
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {UsersApi} from "../../api/api";

type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersApiClassComponent extends React.Component<PropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true)
            UsersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        UsersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setCurrentPage={this.props.setCurrentPage}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   isFetching={this.props.isFetching}
                   setUsers={this.props.setUsers}
                   toggleFollowInProgress={this.props.toggleFollowInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

export type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    toggleFollowInProgress: Array<number>
}

export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

// приниамает весь стейт приложения и возвращает только объект, с необходимыми данными
export function mapStateToProps(state: ReduxRootState) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollowInProgress: state.usersPage.followingInProgress
    }
}

// Создает контейнерную компоненту
const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersApiClassComponent);
export default UsersContainer;

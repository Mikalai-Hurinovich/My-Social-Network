import React from "react";
import {connect} from "react-redux";
import {ReduxRootState} from "../../Redux/Redux-store";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow, UserType} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersApiClassComponent extends React.Component<PropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                   isFetching={this.props.isFetching}
                   toggleFollowInProgress={this.props.toggleFollowInProgress}
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
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
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

type OwnPropsType = {}
// Создает контейнерную компоненту
const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, ReduxRootState>(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
})(UsersApiClassComponent);
export default UsersContainer;

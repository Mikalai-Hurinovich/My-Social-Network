import React from "react";
import {connect} from "react-redux";
import {ReduxRootState} from "../../Redux/redux-store";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    UserType
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getToggleFollowInProgress,
    getTotalUsersCount,
    getUsersReselect
} from "../../Redux/users-selectors";


type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.requestUsers(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
    requestUsers: (currentPage: number, pageSize: number) => void
}

// приниамает весь стейт приложения и возвращает только объект, с необходимыми данными
export function mapStateToProps(state: ReduxRootState) {
    return {
        users: getUsersReselect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        toggleFollowInProgress: getToggleFollowInProgress(state)
    }
}


// Создает контейнерную компоненту

export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReduxRootState>(mapStateToProps, {
            follow,
            unfollow,
            setCurrentPage,
            toggleFollowingProgress,
            requestUsers,
        }
    )
)(UsersContainer)

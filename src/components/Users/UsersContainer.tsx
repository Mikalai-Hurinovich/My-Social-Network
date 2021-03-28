import React from "react";
import {connect} from "react-redux";
import Users from "../Users";
import {ReduxRootState} from "../../Redux/Redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../Redux/users-reducer";

// приниамает весь стейт приложения и возвращает только объект, с необходимыми данными
export function mapStateToProps(state: ReduxRootState) {
    return {
        users: state.usersPage.users
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
        }

    }
}

// Создает контейнерную компоненту
export default connect(mapStateToProps, mapDispatchToProps)(Users);

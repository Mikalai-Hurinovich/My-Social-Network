import React from 'react';
import {UserType} from "../../Redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type PropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    toggleFollowInProgress: Array<number>
    users: UserType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

const Users = (props: PropsType) => {
    return (
        <>
            <Paginator pageSize={props.pageSize} totalUsersCount={props.totalUsersCount} currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>
            {props.users.map(u => <User key={u.id}
                                        toggleFollowInProgress={props.toggleFollowInProgress}
                                        user={u}
                                        follow={props.follow}
                                        unfollow={props.unfollow}/>)}

        </>
    );
};

export default Users;

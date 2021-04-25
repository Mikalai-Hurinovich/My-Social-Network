import React from 'react';
import s from "./Styles.module.css";
import anonymous from "../../assets/images/anonymous.jpg";
import {Button} from "@material-ui/core";
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from 'react-router-dom';

type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowInProgress: Array<number>

}

const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <>
            <div className={s.wrapper}>
                {pages.map(p => {
                    return <span key={p}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                                 className={props.currentPage! === p && `${s.page} ${s.selectedPage}` || s.page}>{p}
                        </span>
                })}
                {props.users.map(u => <div key={u.id}>
                    <div className={s.main}>
                        <div className={s.user}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : anonymous}
                                     alt=""/>
                            </NavLink>
                            {u.followed ?
                                <Button disabled={props.toggleFollowInProgress.some(id => id === u.id)} size={'small'}
                                        color={'primary'}
                                        variant={"contained"}
                                        onClick={() => {
                                            props.unfollow(u.id)
                                        }}>Unfollow</Button> :
                                <Button disabled={props.toggleFollowInProgress.some(id => id === u.id)} size={'small'}
                                        color={'primary'}
                                        variant={"contained"} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</Button>}
                        </div>
                        <div className={s.userInfo}>
                            <span>{u.name}</span>
                            <span>{u.message}</span>
                        </div>
                        <div className={s.userLocation}>{'u.location.country'}, {'u.location.city'}</div>
                    </div>
                </div>)}
            </div>
        </>
    );
};

export default Users;

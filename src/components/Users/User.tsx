import React from 'react';
import s from "./Styles.module.css";
import anonymous from "../../assets/images/anonymous.jpg";
import {Button} from "@material-ui/core";
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from 'react-router-dom';

type PropsType = {
    toggleFollowInProgress: Array<number>
    user: UserType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

const User = ({user, toggleFollowInProgress, follow, unfollow}: PropsType) => {
    return (
        <div>
            <div className={s.main}>
                <div className={s.user}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={s.userPhoto} src={user.photos.small !== null ? user.photos.small : anonymous}
                             alt=""/>
                    </NavLink>
                    {user.followed ?
                        <Button disabled={toggleFollowInProgress.some(id => id === user.id)} size={'small'}
                                color={'primary'}
                                variant={"contained"}
                                onClick={() => {
                                    unfollow(user.id)
                                }}>Unfollow</Button> :
                        <Button disabled={toggleFollowInProgress.some(id => id === user.id)} size={'small'}
                                color={'primary'}
                                variant={"contained"} onClick={() => {
                            follow(user.id)
                        }}>Follow</Button>}
                </div>
                <div className={s.userInfo}>
                    <span>{user.name}</span>
                    <span>{user.message}</span>
                </div>
                <div className={s.userLocation}>{'user.location.country'}, {'user.location.city'}</div>
            </div>
        </div>
    );
};

export default User;

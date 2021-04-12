import React from 'react';
import {MapDispatchToPropsType, MapStateToPropsType} from "./Users/UsersContainer";
import s from './Users/Styles.module.css'
import {Button} from "@material-ui/core";
import axios from "axios";
import anonymous from "../assets/images/anonymous.jpg";

type PropsType = MapStateToPropsType & MapDispatchToPropsType
let UsersApiComponent = (props: PropsType) => {
    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div className={s.wrapper}>
            {props.users.map(u => <div key={u.id}>
                <div className={s.main}>

                    <div className={s.user}>
                        <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : anonymous} alt=""/>
                        {u.followed ?
                            <Button size={'small'} color={'primary'} variant={"contained"} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</Button> :
                            <Button size={'small'} color={'primary'} variant={"contained"} onClick={() => {
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
    )
}
export default UsersApiComponent;

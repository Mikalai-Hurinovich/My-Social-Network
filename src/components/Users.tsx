import React from 'react';
import {MapDispatchToPropsType, MapStateToPropsType} from "./Users/UsersContainer";
import s from './Users/Styles.module.css'
import {Button} from "@material-ui/core";
import axios from "axios";
import anonymous from "../assets/images/anonymous.jpg";

type PropsType = MapStateToPropsType & MapDispatchToPropsType
let Users = (props: PropsType) => {

    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div className={s.wrapper}>
            {/*<div>*/}
            {/*    <span className={s.selectedPage}>1</span>*/}
            {/*    <span >2</span>*/}
            {/*    <span>3</span>*/}
            {/*    <span>4</span>*/}
            {/*    <span>5</span>*/}
            {/*</div>*/}
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
export default Users;

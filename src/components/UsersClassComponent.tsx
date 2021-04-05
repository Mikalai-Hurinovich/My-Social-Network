import React from 'react';
import {MapDispatchToPropsType, MapStateToPropsType} from "./Users/UsersContainer";
import s from './Users/Styles.module.css'
import {Button} from "@material-ui/core";
import axios from "axios";
import anonim from './../assets/images/anonim.jpg'

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersClassComponent extends React.Component<PropsType> {
constructor(props: PropsType) {
    super(props);
    if (this.props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
}
    getUsers = () => {

    }

    render() {
        return (
            <>
                <button onClick={this.getUsers}>GetUsers</button>
                <div className={s.wrapper}>
                    {this.props.users.map(u => <div key={u.id}>
                        <div className={s.main}>

                            <div className={s.user}>
                                <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : anonim}
                                     alt=""/>
                                {u.followed ?
                                    <Button size={'small'} color={'primary'} variant={"contained"} onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</Button> :
                                    <Button size={'small'} color={'primary'} variant={"contained"} onClick={() => {
                                        this.props.follow(u.id)
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
        )
    }
}

export default UsersClassComponent;

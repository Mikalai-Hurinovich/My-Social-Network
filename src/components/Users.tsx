import React from 'react';
import {MapDispatchToPropsType, MapStateToPropsType} from "./Users/UsersContainer";
import s from './Users/Styles.module.css'
import {Button} from "@material-ui/core";

type PropsType = MapStateToPropsType & MapDispatchToPropsType
let Users = (props: PropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                urlPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxYuEUMLCpgb1UdOMPAVxkCnoLndbSrGtVA&usqp=CAU',
                followed: false,
                fullName: "Микола",
                message: 'Hello, IT!',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                urlPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxYuEUMLCpgb1UdOMPAVxkCnoLndbSrGtVA&usqp=CAU',
                followed: false,
                fullName: "Дима",
                message: 'Hello, Travel!',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                urlPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxYuEUMLCpgb1UdOMPAVxkCnoLndbSrGtVA&usqp=CAU',
                followed: true,
                fullName: "Малыха",
                message: 'Hello, Life!',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 4,
                urlPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxYuEUMLCpgb1UdOMPAVxkCnoLndbSrGtVA&usqp=CAU',
                followed: false,
                fullName: "Арчибальд",
                message: 'Hello, Phila!',
                location: {city: 'Philadelphia', country: 'USA'}
            },
            {
                id: 5,
                urlPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxYuEUMLCpgb1UdOMPAVxkCnoLndbSrGtVA&usqp=CAU',
                followed: true,
                fullName: "Витя",
                message: 'Hello, Chicago!',
                location: {city: 'Chicago', country: 'USA'}
            },
            {
                id: 6,
                urlPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxYuEUMLCpgb1UdOMPAVxkCnoLndbSrGtVA&usqp=CAU',
                followed: false,
                fullName: "Артур",
                message: 'Hello, Boston!',
                location: {city: 'Boston', country: 'USA'}
            },
        ])
    }
    return (
        <div className={s.wrapper}>
            {props.users.map(u => <div key={u.id}>
                <div className={s.main}>

                    <div className={s.user}>
                        <img className={s.userPhoto} src={u.urlPhoto} alt=""/>
                        {u.followed ?
                            <Button size={'small'} color={'primary'} variant={"contained"} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</Button> :
                            <Button size={'small'} color={'primary'} variant={"contained"} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</Button>}
                    </div>
                    <div className={s.userInfo}>
                        <span>{u.fullName}</span>
                        <span>{u.message}</span>
                    </div>
                    <div className={s.userLocation}>{u.location.country}, {u.location.city}</div>
                </div>
            </div>)}
        </div>
    )
}
export default Users;

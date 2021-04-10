import React from 'react';
import {MapDispatchToPropsType, MapStateToPropsType} from "./Users/UsersContainer";
import s from './Users/Styles.module.css'
import {Button} from "@material-ui/core";
import axios from "axios";
import anonymous from './../assets/images/anonymous.jpg'

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersClassComponent extends React.Component<PropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <>
                <div className={s.wrapper}>
                    {pages.map(p => {
                        return <span
                            onClick={(e) => {
                                this.onPageChanged(p)
                            }}
                            className={this.props.currentPage! === p && `${s.page} ${s.selectedPage}` || s.page}>{p}
                        </span>
                    })}
                    {this.props.users.map(u => <div key={u.id}>
                        <div className={s.main}>
                            <div className={s.user}>
                                <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : anonymous}
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

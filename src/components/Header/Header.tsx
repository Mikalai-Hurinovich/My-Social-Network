import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./Header.module.css";
import {getAuthUserDataType} from "../../Redux/Auth-reducer";

type HeaderType = {
    getAuthUserData: getAuthUserDataType
    isAuth: boolean
    login: null | string
    email: string | null
}

const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src='https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg' alt={'logoImg'}/>
            </div>

            <div className={s.loginBlock}>
                <div>{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}</div>
                <div>{props.isAuth ? props.email : null}</div>
            </div>
        </header>
    )
}

export default Header;

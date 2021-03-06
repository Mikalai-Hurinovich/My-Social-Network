import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./Header.module.css";
import {getAuthUserDataType} from "../../Redux/auth-reducer";

type HeaderType = {
    getAuthUserData: getAuthUserDataType
    isAuth: boolean
    login: null | string
    email: string | null
    logout: any
}

const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src='https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg'
                     alt={'logoImg'}/>
            </div>

            <div className={s.loginBlock}>
                <div>{props.isAuth || props.login ?
                    <div>
                        {props.login} - <button onClick={props.logout}>Log Out</button>
                    </div> :
                    <NavLink to={'/login'}>Login</NavLink>}</div>
                <div>{props.isAuth || props.login ? props.email : null}</div>
            </div>
        </header>
    )
}

export default Header;

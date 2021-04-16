import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./Header.module.css";

type HeaderType = {
    setAuthUserData: (id: number, email: string, login: string) => void
    isAuth: boolean
    login: null | string
}

const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src='https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg'/>
            </div>

            <div className={s.loginBlock}>
                {
                    props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header;

import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import {Friends} from "../FiendsSideBar/Friends";
import {SideBarType} from "../../Redux/Store";

type SideBarPropsType = {
    sidebar: SideBarType
}
const Navbar = (props: SideBarPropsType) => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={`${s.item}`}>
            <NavLink to={'/Dialogs'} activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/Users'} activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/Photos'} activeClassName={s.active}>Photos</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/News'} activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/Music'} activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/Settings'} activeClassName={s.active}>Settings</NavLink>
        </div>
        <Friends friends={props.sidebar.friends}/>
    </nav>
}

export default Navbar;

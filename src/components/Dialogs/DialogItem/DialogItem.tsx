import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogsItemType = {
    name: string
    id: number
}
export const DialogItem = (props: DialogsItemType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/Dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;
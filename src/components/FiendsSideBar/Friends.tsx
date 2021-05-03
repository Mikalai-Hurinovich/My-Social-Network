import React from "react";
import s from './Friends.module.css'
import {FriendsType} from "../Navbar/Navbar";

type FriendsPropsType = {
    friends: Array<FriendsType>
}

export function Friends(props: FriendsPropsType) {
    let friendsElements = props.friends.map(friend =>
        <div key={friend.id}>
            <img src={friend.img} alt="FriendImg"/>
            {friend.name}
        </div>
    )
    return (
        <div>
            <h2>MY FRIENDS</h2>
            <div className={s.wrapper_images}>
                {friendsElements}
            </div>
        </div>
    )
}

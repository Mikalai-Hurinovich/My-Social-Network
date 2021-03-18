import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../Redux/State";


type PropsType = {
    profilePage: ProfilePageType
    newPostText: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}
const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}/>

        </div>
    )
}

export default Profile;

import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../Redux/State";


type PropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    newPostText: ProfilePageType
    updateNewPostText: (newText: string) => void
}
const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}/>

        </div>
    )
}

export default Profile;

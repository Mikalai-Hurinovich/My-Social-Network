import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../Redux/Store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type PropsType = {
    store: StoreType
}
const Profile = (/*props: PropsType*/) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;

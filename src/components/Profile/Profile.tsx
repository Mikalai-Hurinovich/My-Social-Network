import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateStatusType} from "../../Redux/ProfileReducer";

export type PostsDataType = {
    id: number
    message: string
    count: number
}
export type ProfilePageType = {
    posts: PostsDataType[]
}
type PropsType = {
    profile: ProfilePageType
    status: string
    updateStatus: updateStatusType
}
const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;

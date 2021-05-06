import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
export type PostsDataType = {
    id: number
    message: string
    count: number
}
export type ProfilePageType = {
    posts: PostsDataType[]
    newPostText: string
}
type PropsType = {
    profile: ProfilePageType
}
const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;

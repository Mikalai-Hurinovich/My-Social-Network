import React from 'react';
import {StoreType} from "../../../Redux/Store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";

type PropsType = {
    store: StoreType

}
const MyPostsContainer = (props: PropsType) => {
    let state = props.store.getState();
    let addPostOnWall = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (newText: string) => {
        let action = updateNewPostTextActionCreator(newText)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPostOnWall}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )

}

export default MyPostsContainer;

import React from 'react';
import {addPostAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ReduxRootState} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

type postsDataType = {
    id: number
    message: string
    count: number
}
export type MapStateToPropsType = {
    newPostText: string
    posts: postsDataType[]
}

export type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

export type OwnPropsType = {}

let mapStateToProps = (state: ReduxRootState): MapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, ReduxRootState>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

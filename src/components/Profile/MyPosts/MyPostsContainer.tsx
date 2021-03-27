import React from 'react';
import {RootStateType} from "../../../Redux/Store";
import {addPostActionCreator, updateNewPostTextAC} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ReduxRootState} from "../../../Redux/Redux-store";
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
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type OwnPropsType = {}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        }
    }        
}

const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, ReduxRootState>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

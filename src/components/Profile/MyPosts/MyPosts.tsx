import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/State";

type PropsType = {
    posts: postsDataType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}
type postsDataType = {
    id: number
    message: string
    count: number
}


const MyPosts = (props: PropsType) => {
    let postElements = props.posts.map(p => <Post message={p.message} count={p.count}/>)
    let newPost: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addPostOnWall = () => {
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = (newText: ChangeEvent) => {
        if (newPost.current) {
            let textInTextarea = newPost.current.value;
            props.dispatch(updateNewPostTextActionCreator(textInTextarea))
        }
    }

    return (
        <div className={s.postsWrapper}>
            <h3>My posts</h3>
            <div className={s.item}>
                <div>
                    <textarea onChange={onPostChange} ref={newPost} value={props.newPostText}/>
                </div>
                <br/>
                <div>
                    <button onClick={addPostOnWall}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

}

export default MyPosts;

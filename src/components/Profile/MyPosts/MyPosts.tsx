import React, {createRef, RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPost} from "../../Redux/State";

type PropsType = {
    posts: postsDataType[]
    addPost: (postMessage: string) => void
}
type postsDataType = {
    id: number
    message: string
    count: number
}
const MyPosts = (props: PropsType) => {
    let postElements = props.posts.map(p => <Post message={p.message} count={p.count}/>)

    let newPost: RefObject<any> = React.createRef()
    let addPostOnWall = () => {
        let textInTextarea = newPost.current.value;
        addPost(textInTextarea)
        newPost.current.value = '';
    }
    return (
        <div className={s.postsWrapper}>
            <h3>My posts</h3>
            <div className={s.item}>
                <div>
                    <textarea ref={newPost}></textarea>
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

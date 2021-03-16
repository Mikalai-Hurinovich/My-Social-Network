import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type PropsType = {
    posts: postsDataType[]
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
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
        props.addPost(props.newPostText)
    }
    const onPostChange = () => {
        if (newPost.current) {
            let textInTextarea = newPost.current.value;
            props.updateNewPostText(textInTextarea)
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

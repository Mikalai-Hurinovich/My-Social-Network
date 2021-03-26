import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Button, TextareaAutosize, Typography} from "@material-ui/core";

type PropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
    posts: postsDataType[]
    newPostText: string
}
type postsDataType = {
    id: number
    message: string
    count: number
}


const MyPosts = (props: PropsType) => {
    let postElements = props.posts.map(p => <Post message={p.message} count={p.count}/>)
    let newPost: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let onAddPost = () => {
        props.addPost();
        // props.dispatch(addPostActionCreator())
    }
    const onPostChange = (newText: ChangeEvent) => {
        if (newPost.current) {
            let textInTextarea = newPost.current.value;
            props.updateNewPostText(textInTextarea)
        }
    }

    return (
        <div className={s.postsWrapper}>
            <Typography variant={'h4'}>My posts</Typography>
            <div className={s.item}>
                <div>
                    <TextareaAutosize placeholder={'Your post message...'} rowsMin={2} onChange={onPostChange}
                                      ref={newPost} value={props.newPostText}/>
                </div>
                <br/>
                <div>
                    <Button size={'small'} color={'primary'} variant={"contained"} onClick={onAddPost}>Add Post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

}

export default MyPosts;

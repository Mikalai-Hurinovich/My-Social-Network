import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Typography} from "@material-ui/core";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../Utils/Validators/Validators";

type PropsType = {
    addPost: (newPostText: string) => void
    posts: postsDataType[]
    newPostText: string
}
type postsDataType = {
    id: number
    message: string
    count: number
}

export type addPostFormType = {
    newPostText: string
}
const MyPosts = React.memo((props: PropsType) => {
    console.log('RENDER')
    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} count={p.count}/>)
    const onAddPost = (formData: addPostFormType) => {
        props.addPost(formData.newPostText)
    }
    return (
        <div className={s.postsWrapper}>
            <Typography variant={'h4'}>My posts</Typography>
            <AddPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}, (prevProps, nextProps) => {
    return prevProps.posts.length === nextProps.posts.length
})
const maxLength10 = maxLengthCreator(10)
const addNewPostForm: React.FC<InjectedFormProps<addPostFormType>> = (props: InjectedFormProps<addPostFormType>) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.item}>
            <div>
                <Field component={Textarea}
                       name={'newPostText'}
                       validate={[required, maxLength10]}
                       placeholder={'Your post message...'}/>
            </div>
            <br/>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}
const AddPostReduxForm = reduxForm<addPostFormType>({form: 'addPost'})(addNewPostForm)

export default MyPosts;



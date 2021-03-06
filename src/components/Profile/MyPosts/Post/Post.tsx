import React from 'react';
import s from './Post.module.css';

type MessageType = {
    message: string
    count: number

}

const Post = (props: MessageType) => {
    return (
        <div className={`${s.item} ${s.active}`}>
            <img src="https://i1.sndcdn.com/avatars-000549236160-xswcpb-t500x500.jpg" alt="PostImg"/>
            {props.message}
            <br/>
            <div>
                <span className={s.like}>Like {props.count}</span>
            </div>
        </div>


    )
}

export default Post;

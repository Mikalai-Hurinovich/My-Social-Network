import {ActionsTypes, PostsDataType, ProfilePageType} from "./State";

const AddPost = 'ADD-POST';
const UpdateNewPostText = 'UPDATE-NEW-POST-TEXT';

const ProfileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case AddPost:
            let newPost: PostsDataType = {id: 3, message: state.newPostText, count: 0}
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case UpdateNewPostText:
            state.newPostText = action.newText;
            break;
    }
    return state;
}

export default ProfileReducer;

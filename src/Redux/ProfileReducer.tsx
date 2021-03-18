import {ActionsTypes, PostsDataType, ProfilePageType} from "./State";

const AddPost = 'ADD-POST';
const UpdateNewPostText = 'UPDATE-NEW-POST-TEXT';

const ProfileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    if (action.type === AddPost) {
        let newPost: PostsDataType = {id: 3, message: state.newPostText, count: 0}
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === UpdateNewPostText) {
        state.newPostText = action.newText;
    }
    return state;
}

export default ProfileReducer;

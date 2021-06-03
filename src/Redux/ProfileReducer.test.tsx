import React from "react";
import ProfileReducer, {addPostActionCreator, deletePostAC} from "./ProfileReducer";
import {ProfilePageType} from "../components/Profile/Profile";

let initialState: ProfilePageType;
beforeEach(() => {
    initialState = {
        posts: [
            {id: 1, message: 'Hi, How are you?', count: 10},
            {id: 2, message: 'Good luck, in React)', count: 100},
        ]
    }
})
test('the length of posts array should increase, new message must be correct', () => {
    // 1. start data
    let action = addPostActionCreator('Mikola Programmer')

    // 2. action
    let newState = ProfileReducer(initialState, action)

    // 3. expectations
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe('Mikola Programmer')
})
test('the length of posts array should decrease', () => {
    // 1. start data
    let action = deletePostAC(1)
    // 2. action
    let newState = ProfileReducer(initialState, action)

    // 3. expectations
    expect(newState.posts.length).toBe(1);
})

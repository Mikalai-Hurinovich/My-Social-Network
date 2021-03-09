import React from 'react';
import './index.css';
import state, {addPost, StateDataType, subscribe, updateNewPostText} from "./components/Redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const rerenderEntireTree = (state: StateDataType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

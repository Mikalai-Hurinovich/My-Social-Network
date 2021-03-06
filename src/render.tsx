import React from 'react';
import './index.css';
import App from './App';
import {addPost, StateDataType} from "./components/Redux/State";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';

export const rerenderEntireTree = (state: StateDataType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));
}




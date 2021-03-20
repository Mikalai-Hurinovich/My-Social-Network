import React from 'react';
import './index.css';
import store, {RootStateType} from "./Redux/Store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});

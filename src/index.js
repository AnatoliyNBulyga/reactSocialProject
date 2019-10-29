import state, {subscribe} from "./redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addMessage, addPost, updatePostText, updateMessage} from './redux/State';
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 addMessage={addMessage}
                 updatePostText={updatePostText}
                 updateMessage={updateMessage} />
        </BrowserRouter>, document.getElementById('root'));
}
renderEntireTree(state);
subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

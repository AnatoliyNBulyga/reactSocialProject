import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MyPosts from "./components/Profile/MyPosts/MyPosts";

const App = (props) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state}/>

            <div className="app-wrapper-content">
                {/*<Route path='/profile' component={Profile}/>*/}

                <Route path='/profile'
                       render={ () => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updatePostText={props.updatePostText}
                           newPostText={props.state.newPostText}/>
                       } />
                <Route path='/dialogs'
                       render={ () => <Dialogs
                           dialogsPage={props.state.dialogsPage}
                           addPost={props.addPost}
                           addMessage={props.addMessage}
                           updateMessage={props.updateMessage}/>
                       } />
                <Route path='/news' render={ () => <News/>}/>
                <Route path='/music' render={ () => <Music/>}/>
                <Route path='/settings' render={ () => <Settings/>}/>
            </div>

        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Settings from './components/Settings/Settings';
import Music from "./components/Music/Music";
import Photos from './components/Photos/Photos';
import {RootStateType} from "./components/Redux/State";

type PropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const App = (props: PropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebar={props.state.sideBar}/>
            <div className='app-wrapper-content'>
                <Route path={'/Dialogs'}
                       render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                <Route path={'/Profile'}
                       render={() => <Profile
                           newPostText={props.state.profilePage}
                           updateNewPostText={props.updateNewPostText}
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}/>}/>
                <Route path={'/Photos'} component={Photos}/>
                <Route path={'/News'} component={News}/>
                <Route path={'/Music'} component={Music}/>
                <Route path={'/Settings'} component={Settings}/>
            </div>

        </div>
    );
}

export default App;

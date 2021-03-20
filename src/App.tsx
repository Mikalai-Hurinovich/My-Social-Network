import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Settings from './components/Settings/Settings';
import Music from "./components/Music/Music";
import Photos from './components/Photos/Photos';
import {Route} from 'react-router-dom';
import {ActionsTypes, StoreType} from "./Redux/Store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {

    dispatch: (action: ActionsTypes) => void
    store: StoreType
}
//Test
const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebar={props.store._state.sideBar}/>
            <div className='app-wrapper-content'>
                <Route path={'/Dialogs'}
                       render={() => <DialogsContainer
                           store={props.store}
                       />}/>
                <Route path={'/Profile'}
                       render={() => <Profile
                           store={props.store}
                       />}/>
                <Route path={'/Photos'} component={Photos}/>
                <Route path={'/News'} component={News}/>
                <Route path={'/Music'} component={Music}/>
                <Route path={'/Settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;

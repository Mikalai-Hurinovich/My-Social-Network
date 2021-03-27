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
import store from './Redux/Redux-store'
import {ActionsTypes, StoreType} from "./Redux/Store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users";
import {Switch} from "react-router-dom";
import Error404 from "./components/ErrorPage/Error404";

type AppPropsType = {
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}

const App = (/*props: AppPropsType*/) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebar={store.getState().sideBar}/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route exact path={'/'}/>
                    <Route path={'/Profile'}
                           render={() => <Profile/>}/>
                    <Route path={'/Dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/Users'} render={() => <Users/>}/>
                    <Route path={'/Photos'} component={Photos}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Settings'} component={Settings}/>
                    <Route render={() => <Error404/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;

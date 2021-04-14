import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Settings from './components/Settings/Settings';
import Music from "./components/Music/Music";
import Photos from './components/Photos/Photos';
import {Route, Switch} from 'react-router-dom';
import store from './Redux/Redux-store'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Error404 from "./components/ErrorPage/Error404";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebar={store.getState().sideBar}/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route exact path={'/'}/>
                    <Route path={'/Profile/:userId?'}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/Dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/UsersApiComponent'} render={() => <UsersContainer/>}/>
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

import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Settings from './components/Settings/Settings';
import Music from "./components/Music/Music";
import Photos from './components/Photos/Photos';
import {Route, Switch} from 'react-router-dom';
import store, {ReduxRootState} from './Redux/Redux-store'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Error404 from "./components/ErrorPage/Error404";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useSelector} from "react-redux";

const App = () => {
    const {isAuthLoading} = useSelector((state: ReduxRootState) => ({
        isAuthLoading: state.auth.loading
    }))

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar sidebar={store.getState().sideBar}/>
            {!isAuthLoading && <div className='app-wrapper-content'>
                <Switch>
                    <Route exact path={'/'}/>
                    <Route path={'/Profile/:userId?'}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/Dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/Users'} render={() => <UsersContainer/>}/>
                    <Route path={'/Photos'} component={Photos}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Settings'} component={Settings}/>
                    <Route path={'/Login'} component={Login}/>
                    <Route render={() => <Error404/>}/>
                </Switch>
            </div>}

        </div>
    );
}

export default App;

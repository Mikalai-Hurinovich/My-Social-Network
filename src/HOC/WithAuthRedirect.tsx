import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import ProfileContainer from "../components/Profile/ProfileContainer";
import DialogsContainer from "../components/Dialogs/DialogsContainer";
import {ReduxRootState} from "../Redux/Redux-store";
import {connect} from "react-redux";

type PropsType = {
    isAuth: boolean
}
let mapStateToPropsForRedirect = (state: ReduxRootState) => ({
    isAuth: state.auth.isAuth
});
export const withAuthRedirect: any = (Component: typeof ProfileContainer | typeof DialogsContainer) => {
    class RedirectComponent extends React.Component<PropsType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedRedirectComponent;
}




import React, {Component, ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {ReduxRootState} from "../Redux/Redux-store";
import {connect} from "react-redux";

type PropsType = {
    isAuth: boolean
}
let mapStateToPropsForRedirect = (state: ReduxRootState): PropsType => ({
    isAuth: state.auth.isAuth
});
export const withAuthRedirect: any = (Component: ComponentType) => {
    class RedirectComponent extends React.Component<PropsType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }
    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedRedirectComponent;
}




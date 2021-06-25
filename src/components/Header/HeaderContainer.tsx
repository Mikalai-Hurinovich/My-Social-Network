import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, getAuthUserDataType, logout} from "../../Redux/auth-reducer";
import {ReduxRootState} from "../../Redux/redux-store";

type HeaderContainerType = {
    isAuth: boolean
    login: null | string
    email: null | string
    getAuthUserData: getAuthUserDataType
    logout: (email: string, password: any, rememberMe: boolean) => void
}

class HeaderContainer extends Component<HeaderContainerType> {


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: ReduxRootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
})


export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);

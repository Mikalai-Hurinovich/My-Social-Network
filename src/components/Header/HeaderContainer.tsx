import axios from 'axios';
import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/Auth-reducer";
import {ReduxRootState} from "../../Redux/Redux-store";

type HeaderContainerType = {
    setAuthUserData: (id: number, email: string, login: string) => void
    isAuth: boolean
    login: null | string
}

class HeaderContainer extends Component<HeaderContainerType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: ReduxRootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);

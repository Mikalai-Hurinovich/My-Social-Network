import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/Auth-reducer";
import {ReduxRootState} from "../../Redux/Redux-store";
import {authMe} from "../../api/api";

type HeaderContainerType = {
    setAuthUserData: (id: number, email: string, login: string) => void
    isAuth: boolean
    login: null | string
    email: null | string
}

class HeaderContainer extends Component<HeaderContainerType> {
    componentDidMount() {
        authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
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
    login: state.auth.login,
    email: state.auth.email
})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);

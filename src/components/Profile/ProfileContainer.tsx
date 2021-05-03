import React, {Component} from 'react';
import Profile, {ProfilePageType} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserProfileType} from "../../Redux/ProfileReducer";
import {ReduxRootState} from "../../Redux/Redux-store";
import {Redirect, withRouter} from 'react-router-dom';

type ProfileContainerType = {
    profile: ProfilePageType
    setUserProfile: (profile: null) => void
    match: any
    getUserProfile: getUserProfileType
    isAuth: boolean
}

class ProfileContainer extends Component<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: ReduxRootState) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter<any, any>(ProfileContainer)

export default connect(mapStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponent);

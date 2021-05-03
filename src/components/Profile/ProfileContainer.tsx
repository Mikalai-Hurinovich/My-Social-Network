import React, {Component} from 'react';
import Profile, {ProfilePageType} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserProfileType} from "../../Redux/ProfileReducer";
import {ReduxRootState} from "../../Redux/Redux-store";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";

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
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: ReduxRootState) => ({
    profile: state.profilePage.profile
});
let WithUrlDataContainerComponent = withRouter<any, any>(AuthRedirectComponent)

export default connect(mapStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponent);

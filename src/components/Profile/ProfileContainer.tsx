import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ProfileReducer";
import {ReduxRootState} from "../../Redux/Redux-store";
import {withRouter} from 'react-router-dom';
import {profileLink} from "../../api/api";

type ProfileContainerType = {
    profile: any
    setUserProfile: (profile: null) => void
    match: any
}

class ProfileContainer extends Component<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        profileLink(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: ReduxRootState) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter<any, any>(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent);

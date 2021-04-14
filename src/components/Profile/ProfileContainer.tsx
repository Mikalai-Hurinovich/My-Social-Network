import React, {Component} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ProfileReducer";
import {ReduxRootState} from "../../Redux/Redux-store";
import {withRouter} from 'react-router-dom';

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
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
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

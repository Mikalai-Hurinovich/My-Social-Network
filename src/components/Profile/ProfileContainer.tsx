import React, {Component} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ProfileReducer";
import {ReduxRootState} from "../../Redux/Redux-store";

type ProfileContainerType = {
    profile: any
    setUserProfile: (profile: null) => void
}

class ProfileContainer extends Component<ProfileContainerType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
                debugger
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

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);

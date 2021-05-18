import React, {Component} from 'react';
import Profile, {ProfilePageType} from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getStatusType,
    getUserProfile,
    getUserProfileType,
    updateStatus,
    updateStatusType
} from "../../Redux/ProfileReducer";
import {ReduxRootState} from "../../Redux/Redux-store";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

type ProfileContainerType = {
    profile: ProfilePageType
    setUserProfile: (profile: null) => void
    getStatus: getStatusType
    match: any
    getUserProfile: getUserProfileType
    isAuth: boolean
    status: string
    updateStatus: updateStatusType
    authorizedUserId: null | number
}

class ProfileContainer extends Component<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}


let mapStateToProps = (state: ReduxRootState) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth

});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

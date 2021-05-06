import React from "react";

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component <ProfileStatusType> {
    state = {
        editMode: false
    }

    render() {
        return <>
            {!this.state.editMode
                ?
                <div>
                    <span>{this.props.status}</span>
                </div>
                :
                this.state.editMode &&
                <div>
                    <input value={this.props.status}/>
                </div>
            }
        </>
    };
};
export default ProfileStatus;

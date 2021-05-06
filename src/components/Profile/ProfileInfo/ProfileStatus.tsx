import React from "react";

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component <ProfileStatusType> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        // setState - асинхронная функция
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        // setState - асинхронная функция
        this.setState({
            editMode: false
        })
    }

    render() {
        return <>
            {!this.state.editMode
                ?
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                :
                this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                </div>
            }
        </>
    };
}

export default ProfileStatus;

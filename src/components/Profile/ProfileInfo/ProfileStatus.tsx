import React from "react";
import {updateStatusType} from "../../../Redux/ProfileReducer";

type ProfileStatusType = {
    status: string
    updateStatus: updateStatusType
}

class ProfileStatus extends React.Component <ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }


    render() {
        return <>
            {!this.state.editMode
                ?
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Set your Status'}</span>
                </div>
                :
                this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           autoFocus={true}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
            }
        </>
    };
}

export default ProfileStatus;

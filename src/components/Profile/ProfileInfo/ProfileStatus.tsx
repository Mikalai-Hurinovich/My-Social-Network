import React, {useEffect, useState} from "react";
import {updateStatusType} from "../../../Redux/ProfileReducer";

type ProfileStatusType = {
    status: string
    updateStatus: updateStatusType
}

const ProfileStatus = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status)
    }, [])
    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onChangeStatusWithEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' ? deactivateEditMode() : null;
    }
    const onStatusChange = (e: React.FormEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)
    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }
    //
    // activateEditMode = () => {
    //     // setState - асинхронная функция
    //     this.setState({
    //         editMode: true
    //     })
    // }
    //
    // deactivateEditMode = () => {
    //     // setState - асинхронная функция
    //     this.setState({
    //         editMode: false
    //     })
    //     this.props.updateStatus(this.state.status);
    // }
    // onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
    //     this.setState({
    //         status: e.currentTarget.value
    //     });
    // }
    // onChangeStatusWithEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     e.key === 'Enter' ? this.deactivateEditMode() : null;
    //
    // }
    //
    // componentDidUpdate(prevProps: ProfileStatusType, prevState: ProfileStatusType) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }
    return <>
        {!editMode
            ?
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || 'Set your Status'}</span>
            </div>
            :
            editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onKeyPress={onChangeStatusWithEnterPress}
                    value={status}
                />
            </div>
        }
    </>
};


export default ProfileStatus;

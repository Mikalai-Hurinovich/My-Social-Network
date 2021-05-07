import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {updateStatusType} from "../../../Redux/ProfileReducer";

type PropsType = {
    profile: any
    status: string
    updateStatus: updateStatusType
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.img}>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large} alt="UserPhoto"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}

export default ProfileInfo;

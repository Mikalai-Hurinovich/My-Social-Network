import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {updateStatusType} from "../../../Redux/profile-reducer";

type PropsType = {
    profile: any
    status: string
    updateStatus: updateStatusType
}

const ProfileInfo = ({profile, status, updateStatus}: PropsType) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.img}>
            </div>
            <div className={s.description}>
                <img src={profile.photos.large} alt="UserPhoto"/>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>

    )
}

export default ProfileInfo;

import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

type PropsType = {
    profile: any
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
                <div>{props.profile.aboutMe}</div>
                <div>
                    <label>My Contacts</label>
                    <div>{props.profile.contacts.facebook}</div>
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo;

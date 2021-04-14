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
    debugger
    return (
        <div>
            <div className={s.img}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/2/29/Dscn7471_sunset-sundog_crop_800x300.jpg'
                     alt={'ImgIcon'}/>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large} alt=""/>
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

import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.img}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/2/29/Dscn7471_sunset-sundog_crop_800x300.jpg'
                     alt={'ImgIcon'}/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;
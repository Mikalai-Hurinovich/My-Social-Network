import React from 'react';
import s from './Photos.module.css'

const Photos = () => {
    return (
        <div className={s.main}>
            Photo Gallery
            <div className={s.wrapper__photos}>
                <img
                    src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""/>
                <img
                    src="https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?"
                    alt=""/>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcYXgEvWlAFg4Kkqa47N4UwXIqz3ni1CZ6w&usqp=CAU"
                    alt=""/>
                <img
                    src="https://media.nature.com/lw800/magazine-assets/d41586-020-01390-w/d41586-020-01390-w_17974388.jpg"
                    alt=""/>
                <img src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg" alt=""/>
                <img
                    src="https://lh3.googleusercontent.com/CrhU1hnoaVfR4tEhZbHM8PU7czpg6nmjNbHi3KjhC9-bTk7AD6-Qej2aPG06yClb-l1Yx8cWUol9au6jJjFMN4ITmQ=w640-h400-e365-rj-sc0x00ffffff"
                    alt=""/>
                <img
                    src="https://i.guim.co.uk/img/media/18c7596e2cda2b1f2b943c938b977b59028c5f86/0_500_3915_2348/master/3915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=37fbad4d1544e39800b4be4bf53078ed"
                    alt=""/>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIm6wcLGw99uqZujlMET1F-N81G951HSbLg&usqp=CAU"
                    alt=""/>
                <img
                    src="http://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg"
                    alt=""/>
            </div>
        </div>
    )
}

export default Photos;

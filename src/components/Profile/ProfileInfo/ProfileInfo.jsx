import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.description}>
            <img src={props.profile.photos.small} alt={props.profile.fullName}/>
            <div className={s.description_body}>{props.profile.aboutMe}</div>
        </div>
    );
}

export default ProfileInfo;
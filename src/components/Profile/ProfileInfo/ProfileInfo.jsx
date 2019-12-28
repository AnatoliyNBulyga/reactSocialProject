import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.description}>
            <img src={props.profile.photos.small} alt={props.profile.fullName}/>
            <ProfileStatus status={'Hello my friends'}/>
        </div>
    );
}

export default ProfileInfo;
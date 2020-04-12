import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import UserPhoto from '../../../assets/img/user1.png';
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";

const ProfileInfo = ({profile, savePhoto, status, updateStatus, isOwner, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    };
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };
    const onSubmit = (formData) => {
       saveProfile(formData).then( () =>{
           setEditMode(false);
       });

    }

    return (
        <div className={s.description}>
            <img src={profile.photos.small || UserPhoto} className={s.avatar} alt={profile.fullName}/>
            {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            { editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>
            }

        </div>
    );
};


export default ProfileInfo;
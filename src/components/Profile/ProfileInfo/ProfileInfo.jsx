import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.description}>
            <img src="https://i.dailymail.co.uk/1s/2019/09/16/12/18530818-7468587-image-a-23_1568631983753.jpg" alt="ava"/>
            <div className={s.description_body}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis remn umquam voluptatem accusantium, vel quos labore, natus eius alias ut nesciunt ullam ad, in doloribus quo placeat cumque ex itaque.</div>
        </div>
    );
}

export default ProfileInfo;
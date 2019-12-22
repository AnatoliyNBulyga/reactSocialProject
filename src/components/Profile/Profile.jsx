import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from  './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) => {

   return (
      <div className={s.left_content}>
         <ProfileInfo profile={props.profile}/>
         <MyPostsContainer />
      </div>
   );
}

export default Profile;
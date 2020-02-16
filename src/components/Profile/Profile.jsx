import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from  './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
   return (
      <div className={s.left_content}>
         <ProfileInfo savePhoto={props.savePhoto}
                      isOwner={props.isOwner}
                      profile={props.profile}
                      status={props.status}
                      updateStatus={props.updateStatus}
                      saveProfile={props.saveProfile}
         />
         <MyPostsContainer />
      </div>
   );
}

export default Profile;
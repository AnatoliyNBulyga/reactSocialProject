import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from  './Profile.module.css';

const Profile = (props) => {
   return (
      <div className={s.left_content}>
         <ProfileInfo/>
         <MyPosts  posts={props.profilePage.posts}
                    addPost={props.addPost}
                    updatePostText={props.updatePostText}
                    newPostText={props.newPostText}/>
      </div>
   );
}

export default Profile;
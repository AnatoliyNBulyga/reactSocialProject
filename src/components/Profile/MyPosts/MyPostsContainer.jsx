import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let onPostChange = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    };
    
   return (
      <MyPosts updatePostText={onPostChange}
                addPost={addPost}
               posts={state.profilePage.posts}
               newPostText={state.profilePage.newPostText}
      />
   );
}

export default MyPostsContainer;
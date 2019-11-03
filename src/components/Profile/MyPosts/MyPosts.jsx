import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let posts = props.posts;
    let postsElements = posts.map(p => <Post message={p.text} like_count={p.likesCount}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updatePostTextActionCreator(text));
    };
    
   return (
      <div>
         <h3>My posts</h3>
          <div className={s.postEditor}>
            <textarea onChange={onPostChange}
                        value={props.newPostText}></textarea>
              <button onClick={addPost}>Add post</button>
          </div>
         <div className={s.posts}>
             { postsElements }
         </div>
      </div>
   );
}

export default MyPosts;
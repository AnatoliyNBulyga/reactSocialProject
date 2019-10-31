import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = props.store.getState().profilePage.posts;
    let postsElements = posts.map(p => <Post message={p.text} like_count={p.likesCount}/>);
    
    let newPostElement = React.createRef();
    let addPost = () => {
        props.store.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.store.updatePostText(text);
    };
    
   return (
      <div>
         <h3>My posts</h3>
          <div className={s.postEditor}>
            <textarea onChange={onPostChange}
                        ref={newPostElement}
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
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let posts = props.posts;
    let postsElements = posts.map(p => <Post message={p.text} key={p.id} like_count={p.likesCount}/>);

    const addComment = formData => {
        props.addPost(formData.newCommentText);
    }
   return (
      <div>
         <h3>My posts</h3>
          <AddCommentReduxForm onSubmit={addComment}/>
         <div className={s.posts}>
             { postsElements }
         </div>
      </div>
   );
}

const AddComment = (props) => {
    return (
            <form className={s.postEditor} onSubmit={props.handleSubmit}>
                <Field component="textarea" name="newCommentText" placeholder="Add comment"/>
                <button>Add post</button>
            </form>
    );

}
const AddCommentReduxForm = reduxForm({form:"addCommentProfileForm"})(AddComment);

export default MyPosts;
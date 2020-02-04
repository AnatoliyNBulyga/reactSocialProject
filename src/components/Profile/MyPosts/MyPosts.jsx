import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLength30, minLength2, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const MyPosts = React.memo(props => {
    let posts = props.posts;
    let postsElements =
        [...posts]
            .reverse() /* ! reverse all posts with copy of post array */
            .map(p => <Post message={p.text} key={p.id} like_count={p.likesCount}/>);

    const addComment = formData => {
        props.addPost(formData.newCommentText);
    }
    return (
        <div>
            <h3>My posts</h3>
            <AddCommentReduxForm onSubmit={addComment}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

const AddComment = (props) => {
    return (
            <form className={s.postEditor} onSubmit={props.handleSubmit}>
                <Field
                    component={Textarea}
                    name="newCommentText"
                    placeholder={"Add comment"}
                    validate={[required, maxLength30, minLength2]}
                />
                <button>Add post</button>
            </form>
    );

}
const AddCommentReduxForm = reduxForm({form:"addCommentProfileForm"})(AddComment);

export default MyPosts;
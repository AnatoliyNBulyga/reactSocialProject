import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

        return <StoreContext.Consumer>{
                store => {
                        let state = store.getState();
                        let addPost = () => {
                            store.dispatch(addPostActionCreator());
                        };
                        let onPostChange = (text) => {
                            store.dispatch(updatePostTextActionCreator(text));
                        };

                        return <MyPosts updatePostText={onPostChange}
                                 addPost={addPost}
                                 posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}
                        />
                }

        }
        </StoreContext.Consumer>

}

export default MyPostsContainer;
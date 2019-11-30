import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
     return {
             posts: state.profilePage.posts,
             newPostText: state.profilePage.newPostText
     }
}
const mapDispatchToProps = (dispatch) => {
      return {
              updatePostText: (text) => {
                      let action =  updatePostTextActionCreator(text);
                      dispatch(action);
              },
              addPost: () => {
                      dispatch(addPostActionCreator());
              }
      }
}

const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default SuperMyPostsContainer;
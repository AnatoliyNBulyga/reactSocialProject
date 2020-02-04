import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
     return {
             posts: state.profilePage.posts,
             newPostText: state.profilePage.newPostText
     }
}
const mapDispatchToProps = (dispatch) => {
      return {
              addPost: (addComment) => {
                      dispatch(addPostActionCreator(addComment));
              }
      }
}

export default compose( connect(mapStateToProps, mapDispatchToProps))(MyPosts);
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {

     switch (action.type) {

         case ADD_POST :
             let newPost = {
                 id: 3,
                 text: state.newPostText,
                 likesCount: '+' + 5
             };
             state.posts.push(newPost);
             state.newPostText = '';
             return state;

         case  UPDATE_POST_TEXT :
             state.newPostText = action.newPostText;
             return state;

         default:
             return state;
     }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = text =>
    ({type: UPDATE_POST_TEXT, newPostText: text});

export default profileReducer;

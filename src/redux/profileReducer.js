const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const initialState =  {
    posts: [
        {id:1, text:'Hi! How are you?', likesCount:'+' + 11},
        {id:2, text:'Hey there!', likesCount: '+' + 10}
    ],
    newPostText: ''
};
const profileReducer = (state = initialState, action) => {

     switch (action.type) {

         case ADD_POST : {
             let newPost = {
                 id: 3,
                 text: state.newPostText,
                 likesCount: '+' + 5
             };
             let stateCopy = {...state};
             stateCopy.posts = [...state.posts];
             stateCopy.posts.push(newPost);
             stateCopy.newPostText = '';
             return stateCopy;
         }
         case  UPDATE_POST_TEXT : {
             let stateCopy = {...state};
             stateCopy.newPostText = action.newPostText;
             return stateCopy;
         }
         default:
             return state;
     }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = text =>
    ({type: UPDATE_POST_TEXT, newPostText: text});

export default profileReducer;

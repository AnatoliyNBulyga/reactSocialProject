import {userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState =  {
    posts: [
        {id:1, text:'Hi! How are you?', likesCount:'+' + 11},
        {id:2, text:'Hey there!', likesCount: '+' + 10}
    ],
    newPostText: '',
    profile: null
};
const profileReducer = (state = initialState, action) => {

     switch (action.type) {

         case ADD_POST : {
             return {
                 ...state,
                 posts: [...state.posts, {id: 3,text: state.newPostText,likesCount: '+' + 5}],
                 newPostText: ''
             };
         }
         case  UPDATE_POST_TEXT : {
             return {
                 ...state,
                 newPostText: action.newPostText
             };
         }
         case SET_USER_PROFILE : {
             return {
                ...state,
                profile: action.profile
             };
         }
         default:
             return state;
     }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = text => ({type: UPDATE_POST_TEXT, newPostText: text});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile: profile});

export const getUserProfile = userId => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });

}

export default profileReducer;

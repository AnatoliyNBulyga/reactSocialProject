import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState =  {
    posts: [
        {id:1, text:'Hi! How are you?', likesCount:'+' + 11},
        {id:2, text:'Hey there!', likesCount: '+' + 10}
    ],
    profile: null,
    status: ''
};
const profileReducer = (state = initialState, action) => {

     switch (action.type) {

         case ADD_POST : {
             const newPost = {
                 id: state.posts.length + 1,
                 text: action.addComment,
                 likesCount: '+' + 5
             }
             return {
                 ...state,
                 posts: [...state.posts, newPost]
             };
         }

         case SET_USER_PROFILE : {
             return {
                ...state,
                profile: action.profile
             };
         }
         case SET_STATUS : {
             return {
                 ...state,
                 status: action.status
             }
         }
         case DELETE_POST : {

             return {
                 ...state,
                 posts: state.posts.filter(p => p.id != action.postId)
             };
         }
         default:
             return state;
     }

};

export const addPostActionCreator = (addComment) => ({type: ADD_POST, addComment: addComment});
// export const updatePostTextActionCreator = text => ({type: UPDATE_POST_TEXT, newPostText: text});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile: profile});
export const setStatus = status => ({type: SET_STATUS, status: status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUserProfile = userId => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });

}
export const getStatus = userId => (dispatch) => {
     profileAPI.getStatus(userId).then(response => {
         dispatch(setStatus(response.data));
     })
}
export const updateStatus = status => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }

    })
}

export default profileReducer;

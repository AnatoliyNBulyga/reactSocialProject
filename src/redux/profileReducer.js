import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState =  {
    posts: [
        {id:1, text:'Hi! How are you?', likesCount:'+' + 11},
        {id:2, text:'Hey there!', likesCount: '+' + 10}
    ],
    newPostText: '',
    profile: null,
    status: ''
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
         case SET_STATUS : {
             return {
                 ...state,
                 status: action.status
             }
         }
         default:
             return state;
     }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = text => ({type: UPDATE_POST_TEXT, newPostText: text});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile: profile});
export const setStatus = status => ({type: SET_STATUS, status: status});

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

import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import ReactDOM from "react-dom";
import App from "../App";

const state =  {
    posts: [
        {id:1, text:'Hi! How are you?', likesCount:'+' + 11},
        {id:2, text:'Hey there!', likesCount: '+' + 10},
        {id:3, text:'Hey!', likesCount: '+' + 10}
    ]
};

it('length post should incremented', () => {
    //1. test data
    let action = addPostActionCreator('Hello!');
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(4);
});
it('Message of new post should be correct', () => {
    //1. test data
    let newState = profileReducer(state, action);
    //2.action
    let action = addPostActionCreator('Hello!');
    //3.expectation
    expect(newState.posts[3].text).toBe("Hello!");
});
it('length of messages should be decrement after deleting', () => {
    //1. test data
    let action = deletePost(2);
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(2);
});
it('length shouldn\'t decrement if id is incorrect', () => {
    //1. test data
    let action = deletePost(200);
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(3);
});

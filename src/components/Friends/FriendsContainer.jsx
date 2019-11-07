import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
};
const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const SuperFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default SuperFriendsContainer;
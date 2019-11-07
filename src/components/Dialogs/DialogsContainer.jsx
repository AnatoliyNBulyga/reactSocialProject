import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
        return {
                dialogsPage: state.dialogsPage,
                messages: state.dialogsPage.messages
        }
};
const mapDispatchToProps = (dispatch) => {
        return {
                addMessage: () => {
                        dispatch(addMessageActionCreator());
                },
                updateMessage: (text) => {
                        dispatch(updateMessageActionCreator(text));
                }
        }
}

const SuperDialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SuperDialogContainer;
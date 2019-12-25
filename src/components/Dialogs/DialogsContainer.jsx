import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const SuperDialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default SuperDialogContainer;
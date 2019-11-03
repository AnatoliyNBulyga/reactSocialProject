import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };
    let updateMessage = (text) => {
        props.store.dispatch(updateMessageActionCreator(text));
    }

    return (
        <Dialogs updateMessage={updateMessage}
                 addMessage={addMessage}
                 dialogsPage={state.dialogsPage}
                 messages={state.dialogsPage.messages}
        />
    );
}

export default DialogsContainer;
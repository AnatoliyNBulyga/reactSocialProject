import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

        return <StoreContext.Consumer>{

                 store => {

                        let state = store.getState();
                        let addMessage = () => {
                            store.dispatch(addMessageActionCreator());
                        };
                        let updateMessage = (text) => {
                            store.dispatch(updateMessageActionCreator(text));
                        }
                        return <Dialogs updateMessage={updateMessage}
                             addMessage={addMessage}
                             dialogsPage={state.dialogsPage}
                             messages={state.dialogsPage.messages}
                        />
                }

        }

        </StoreContext.Consumer>

}

export default DialogsContainer;
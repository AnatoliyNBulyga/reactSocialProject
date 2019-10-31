import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItems from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogs = props.store.getState().dialogsPage.dialogs;
    let messages = props.store.getState().dialogsPage.messages;
    let dialogsElements = dialogs.map( d => <DialogItems name={d.name} id={d.id} avatar={d.avatar}/>);

    let messagesElements = messages.map( m =>   <Message text={m.text} id={m.id} /> );

    let newMessage = React.createRef();
    let addMessage = () => {
        let text = newMessage.current.value;
        props.store.addMessage(text);
    };
    let updateMessage = () => {
        let text = newMessage.current.value;
        props.store.updateMessage(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.message_area}>
                <div className={s.messages}>
                    { messagesElements } 
                </div>
                <div className={s.add_message}>
                    <textarea ref={newMessage}
                                onChange={updateMessage}
                                value={props.store.getState().dialogsPage.newMessage}></textarea>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
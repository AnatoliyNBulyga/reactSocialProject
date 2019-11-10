import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItems from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogs = props.dialogsPage.dialogs;
    let messages = props.messages;
    let dialogsElements = dialogs.map( d => <DialogItems name={d.name} key={d.id} id={d.id} avatar={d.avatar}/>);

    let messagesElements = messages.map( m =>   <Message text={m.text} key={m.id} id={m.id} /> );

    let addMessage = () => {
        props.addMessage();
    };
    let onUpdateMessage = (e) => {
        let text = e.target.value;
        props.updateMessage(text);
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
                    <textarea   onChange={onUpdateMessage}
                                value={props.dialogsPage.newMessageText}
                                placeholder="Enter your message"></textarea>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
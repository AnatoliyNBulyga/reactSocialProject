import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItems from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLength30, minLength2, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let dialogs = props.dialogsPage.dialogs;
    let messages = props.messages;
    let dialogsElements = dialogs.map( d => <DialogItems name={d.name} key={d.id} id={d.id} avatar={d.avatar}/>);

    let messagesElements = messages.map( m =>   <Message text={m.text} key={m.id} id={m.id} /> );
    
    if (!props.isAuth) return <Redirect to={"/login"} />

    const addNewMessage = formData => {
        props.addMessage(formData.newMessageBody);
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
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.add_message}>
            <Field
                component={Textarea}
                name="newMessageBody"
                placeholder={"Enter your message"}
                validate={[required, maxLength30, minLength2]}
            />
            <button>Add Message</button>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
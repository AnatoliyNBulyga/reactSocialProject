import React from 'react';
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormControls/FormControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button className={s.button_submit}>Save</button>

            { error && <div className={style.formSummaryError}>{error}</div> }

            <div className={s.profile_form}>
                <b>Full name</b>: { createField("Full name", "fullName", [], Input) }
            </div>
            <div>
                <b>Looking for a job</b>: { createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>

            <div>
                <b>My professional skills</b>: { createField("My skills", "lookingForAJobDescription", [], Textarea) }
            </div>

            <div>
                <b>About me</b>:  { createField("About me", "AboutMe", [], Input) }
            </div>
            <div>
                <b>Contacts</b>: {
                    Object.keys(profile.contacts).map( key => {
                        return (
                            <div key={key} className={s.contact}>
                                <b>{key}:{ createField(key, "contacts." + key, [], Input) }</b>
                            </div>
                        );
                    })
                }
            </div>

        </form>
    );
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
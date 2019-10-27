import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>

            <NavLink to={path} activeClassName={s.active}>
                <img className={s.avatar} src={props.avatar} alt={props.name}/>
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogItem;
import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import UserPhoto from '../../assets/img/user1.png'

const UsersF = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            });

        }
    }

    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.users.map(u => <div key={u.key} className={s.users_card}>
                <div className={s.avatar_block}>
                    <div className={s.image}>
                        <img src={u.photos.small !== null ? u.photos.small : UserPhoto} alt={u.name}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)} } className={s.button}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)} } className={s.button}>Follow</button>}

                    </div>
                </div>
                <div className={s.content_block}>
                    <div>
                        {u.name}
                    </div>
                    <div>{u.status !== null ? u.status : "I'am a boss"}</div>
                </div>
                <div>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </div>
            </div>)
        }
    </div>
}

export default UsersF;
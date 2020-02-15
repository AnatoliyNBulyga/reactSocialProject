import React from 'react';
import s from './Users.module.css';
import UserPhoto from '../../assets/img/user1.png';
import {NavLink} from "react-router-dom";

let User = ({user, ...props}) => {

    return (
        <div className={s.users_card}>
            <div className={s.avatar_block}>
                <NavLink to={'/profile/' + user.id}>
                    <div className={s.image}>
                        <img src={user.photos.small !== null ? user.photos.small : UserPhoto} alt={user.name}/>
                    </div>
                </NavLink>
                <div>
                    {user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      props.unFollow(user.id)
                                  }}
                                  className={s.button}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      props.follow(user.id)
                                  }}
                                  className={s.button}>Follow</button>}
                </div>

            </div>
            <div className={s.content_block}>
                <div>
                    {user.name}
                </div>
                <div>{user.status !== null ? user.status : "I'am a boss"}</div>
            </div>
            <div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>
        </div>
    )
}

export default User;
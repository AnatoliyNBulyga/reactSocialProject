import React from 'react';
import s from './Users.module.css';
import UserPhoto from '../../assets/img/user1.png'
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    };

    return (
        <div>
            <div>
                {pages.map( p => {
                    return <span className={`${props.currentPage === p && s.selected} ${s.pageNumber}`}
                    onClick={ (e) => {props.onPageChanged(p)} }>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.key} className={s.users_card}>
                    <div className={s.avatar_block}>
                        <NavLink to={'/profile/' + u.id}>
                            <div className={s.image}>
                                <img src={u.photos.small !== null ? u.photos.small : UserPhoto} alt={u.name}/>
                            </div>
                        </NavLink>
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
    )
}

export default Users;
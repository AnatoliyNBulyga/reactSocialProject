import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {id:1, avatar:"https://cdn3.iconfinder.com/data/icons/accounting-1/80/Account-19-512.png", followed: true, fullName:"Timofey", status: "I'm a boss", location: {city:"Kiev", country: "Ukraine"} },
                {id:2, avatar:"https://cdn3.iconfinder.com/data/icons/accounting-1/80/Account-19-512.png", followed: false, fullName:"Nicole", status: "I'm a super boss", location: {city:"Zaporozhye", country: "Ukraine"} },
                {id:3, avatar:"https://cdn3.iconfinder.com/data/icons/accounting-1/80/Account-19-512.png", followed: true, fullName:"Hennadiy", status: "I'm a student", location: {city:"Donetsk", country: "Ukraine"}}
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.key} className={s.users_card}>
                <div className={s.avatar_block}>
                    <div className={s.image}>
                        <img src={u.avatar} alt={u.fullName}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)} } className={s.button}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)} } className={s.button}>Follow</button>}

                    </div>
                </div>
                <div className={s.content_block}>
                    <div>
                        {u.fullName}
                    </div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            </div>)
        }
    </div>
}

export default Users;
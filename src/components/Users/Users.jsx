import React from 'react';
import s from './Users.module.css';
import UserPhoto from '../../assets/img/user1.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {

    return (
        <div>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged} />
            <div>
                {props.users.map(user => <User
                                            key={user.id}
                                            user={user}
                                            followingInProgress={props.followingInProgress}
                                            unFollow={props.unFollow}
                                            follow={props.follow} />
                )}
            </div>
        </div>
    )
}

export default Users;
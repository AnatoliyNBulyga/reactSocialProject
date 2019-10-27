import React from 'react';
import s from './Friends.module.css';
import FriendBlock from "./FriendBlock/FriendBlock";

const Friends = (props) => {
    let friends = props.friendsProps;
    let friendsBlocks = friends.map( prop => <FriendBlock avatar={prop.avatar} name={prop.name}/> );
    return (
        <div className={s.friends_wrap}>
            <h2 className={s.friend_head}>Friends</h2>
            <div className={s.friend_body}>
                {friendsBlocks}
            </div>
        </div>
    );
}

export default Friends;
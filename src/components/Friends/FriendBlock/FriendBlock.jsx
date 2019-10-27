import React from 'react';
import s from './FriendBlock.module.css';

const FriendBlock = (props) => {
    return (
        <div className={s.friend_block}>
            <div className={s.block_image}><img src={props.avatar} alt={props.name}/></div>
            <div className={s.name}>{props.name}</div>
        </div>
    );
}

export default FriendBlock;
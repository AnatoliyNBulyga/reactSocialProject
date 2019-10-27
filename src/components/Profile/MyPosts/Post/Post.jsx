import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

   return (
      <div className={s.item}>

         <img src="https://img1.looper.com/img/gallery/disney-may-take-over-development-of-avatar-x-men-franchises/intro-1533929612.jpg" alt="ava"/>

         <div className={s.message}>{props.message}</div>

         <div className={s.like_area}>
            <div className={s.like_count}>{props.like_count}</div>
            <div className={s.like}>like</div>
         </div>
      </div>       
   );
}

export default Post;
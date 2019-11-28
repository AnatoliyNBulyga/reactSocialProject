import React from 'react';
import s from './Preloader.module.css';
import preloader from '../../../assets/img/loader.svg';

const Preloader = (props) => {
    return <div className={s.preloader}><img src={preloader}/></div>;
}

export default Preloader;
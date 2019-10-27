import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
   return (
      <header className={s.header}>
         <img src="https://www.logogenie.net/download/preview/medium/3589659" alt="logo" />
      </header>
   );
}

export default Header;
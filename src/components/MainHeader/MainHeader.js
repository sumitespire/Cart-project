import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
 // console.log('___header', props)
  return (
    <header className={classes['main-header']}>
      <h1>Logo</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} callLength={props.cart} />
    </header>
  );
};

export default MainHeader;

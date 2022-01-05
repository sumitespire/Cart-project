import React from "react";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  console.log("___header", props);


  const toggleHanler = () => {
    document.getElementById('cart').classList.toggle('show')
  }


  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li className="cartLi" onClick={toggleHanler}>
            <a href="#"> Cart <span>{props.callLength}</span></a>
          </li>
        )}

        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

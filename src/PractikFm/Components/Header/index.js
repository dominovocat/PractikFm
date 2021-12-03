import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = (props) => {
  const path = useLocation().pathname;
  return (
    <header>
      <Link to="/" className={styles.Header}>
        <img src="/static/images/squad.png" />
        {path === "/" || path === "/signup" ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/signup">signup</Link>
        )}
      </Link>
    </header>
  );
};

export default Header;

import React from 'react';
import "./style.css";

const Layout = (props) => {
    return (
  <div className="all">
    <div className="layout">{props.children}</div>
    <div className="footer">
        Copyright 2022. hang-hae99 9th W3 @joyfive all rights reserved.
    </div>
  </div>);
};

export default Layout;

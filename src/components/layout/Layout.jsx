import React, { Children } from 'react';
import "./style.css";

const Layout = ({children}) => {
    return (
  <div className="all">
    <div className="layout"> {children} </div>
    <div className="footer">
        <div className="footer-txt">
        Copyright 2022. hang-hae99 9th W3 @joyfive all rights reserved. 
        </div>
    </div>
  </div>);
};

export default Layout;

import React from "react";
import { Link,Route,Switch } from "react-router-dom";
import "./Header.css";
const Header = () => {








  return (
    <header className="header">
      <div>
      <h1>Pizzalarla Türkiye</h1>
      </div>
      <div>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5b9c97151080549.6305bee8e5150.gif"></img>
      </div>
      <div className="header-link">
        <Link to="/">Anasayfa</Link>
        <Link to="/">Destek</Link>
      </div>
    
    </header>
    
   
  );
};
export default Header;

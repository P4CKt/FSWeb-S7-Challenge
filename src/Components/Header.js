import React from "react";
import { Link,Route,Switch } from "react-router-dom";

const Header = () => {








  return (
    <header className="header">
      <div>
      <h1>Pizzalarla Türkiye</h1>
      </div>
      <div className="header-link">
        <Link to="/">Anasayfa</Link>
        <Link to="/">Destek</Link>
      </div>
    
    </header>
    
   
  );
};
export default Header;

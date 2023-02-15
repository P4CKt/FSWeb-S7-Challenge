import React from "react";
import { Link,Route,Switch,BrowserRouter } from "react-router-dom";

const Banner = () => {








  return (
   <div className="main-banner">
   <div className="pizza">

     <img className="img-banner" src="https://images6.alphacoders.com/992/992228.jpg"/>
     <div>
     <Link to="/pizza" id="order-pizza" >Pizza ?</Link>
     </div> 
   </div>

     </div>

  );
};
export default Banner;

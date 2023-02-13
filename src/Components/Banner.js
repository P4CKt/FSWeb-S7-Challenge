import React from "react";
import { Link,Route,Switch,BrowserRouter } from "react-router-dom";

const Banner = () => {








  return (
   <div className="main-banner">
   <div className="pizza">

     <img className="img-banner" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/> 
     <Link to="/pizza" id="order-pizza">Pizza ?</Link>
   </div>

     </div>

  );
};
export default Banner;

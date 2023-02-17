import { Link,Route,Switch,BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Banner from "./Components/Banner"
import Form from "./Components/Form";
import { useState } from "react";

const App = (props) => {
  const {dis}=props;

  const[orderlist,setOrderList]=useState([])
  
  function Orders(item)
  {
      const nOrder=[...orderlist,item]
      setOrderList(nOrder)
  }

console.log(orderlist)


  return (
    
    <div> 
     
      <Header/>
      <Switch>
      <Route exact path="/">
          <Banner/>
        </Route>
        <Route exact path="/pizza" >
          <Form dis={dis} submitCallBack={Orders}/>
        </Route>
      </Switch>
      
    </div>

  
  );
};
export default App;

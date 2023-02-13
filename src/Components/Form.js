import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React,{ useEffect, useState } from "react";
import { Link,Route,Switch } from "react-router-dom";
import "./Form.css";


const Form = (props) => {
    const {submitCallBack}=props;

    const [order,setOrder]= useState(
        {
          isim: "",
          boyut: "",
          cesit: "",
          malzeme1: false,
          malzeme2: false,
          özel: "",
      }
      )
      const pizza={select:["Eko Sucuklu Pizza",
        "Margarita Pizza",
       " White Pizza",
        "4 Peynirli Pizza",
       " Barbekü Tavuklu Pizza.",
       " Supreme Pizza",
        "Pepperoni Pizza",
        "Gennaro Pizza"],
        extra:["Sucuk","Pastırma","Biber"]}
        
      const handleSubmitOrder=(event)=>{
            event.preventDefault();
            return submitCallBack(order);
      }

      const handleChangeOrder= (event)=>{
        const {value,name}=event.target;
       setOrder({...order,[name]:value})
      
      }
      
    //   useEffect(()=>console.log(orderlist),[]);

  return (
    <form id="pizza-form" onSubmit={handleSubmitOrder}>
    <fieldset >
     <legend>Nası Olsun :P</legend>
        
        <label>
            <h3>Teslimat İsmi</h3>
            <input name="isim" id="name-input"type="text" value={order.isim} onChange={handleChangeOrder}></input>
        </label>
        <label htmlFor="size-dropdown" >
                <div className="p-size">
                <h3>Pizza Boyutu</h3>
                    <select name="boyut" id="size-dropdown" onChange={handleChangeOrder}value={order.boyut} >
                        <option id="s-empty" value=""name="boyut">Lütfen Boyut Seçiniz</option>
                        <option id="s-big" value="big-size"name="boyut">Büyük</option>
                        <option id="s-medium"value="medium-size"name="boyut">Orta</option>
                        <option id="s-small" value="small-size" name="boyut">Küçük</option>
                    </select>
                </div>
        </label>
        <label htmlFor="s-dropdown" >
                <div className="p-size">
                <h3>Pizza Seçimi</h3>
                    <select name="cesit" id="s-dropdown" onChange={handleChangeOrder}value={order.cesit} >
                       {pizza.select.map((item)=>(
                        <option id="e-pizza" value={item}name="cesit">{item}</option>
                       ))} 
                       
                    </select>
                </div>
        </label>
        <label htmlFor="extra-dropdown" >
                <div className="p-extra">
                <h3>Ek Malzeme</h3>
                {pizza.extra.map((item)=>(
                    <label> {item}
                       <input type="checkbox" id="extra-dropdown" name="malzeme1" value={item} onChange={handleChangeOrder}/>
                    </label>
                    
                       ))} 
                </div>
        </label>
        <label htmlFor="extra-dropdown" >
                <div className="p-extra">
                <h3>Ek Malzeme</h3>
                {pizza.extra.map((item)=>(
                    <label> {item}
                       <input type="checkbox" id="extra-dropdown" name="malzeme2" value={item} onChange={handleChangeOrder}/>
                    </label>
                    ))} 
                </div>
        </label>
        <button type="submit" >Sipariş Ver</button>
{/* 
        <label htmlFor="submit" >
                <div className="p-extra">
                <input type="button">Hadi Bakimm</input>
               
                </div>
        </label> */}

  
     {/*<h3>Pizza Boyutu</h3>
    
        <input type="radio"></input>
        <label for="s-big">Büyük Boy</label> 
        <input type="radio"id="s-medium"value="medium-size"name="size"></input>
        <label for="s-medium">Orta Boy</label>
        <input type="radio"id="s-small" value="small-size" name="size"></input>
        <label for="s-small">Küçük Boy</label>
       */}
  
       

    </fieldset>
 </form>
    
  );
};
export default Form;

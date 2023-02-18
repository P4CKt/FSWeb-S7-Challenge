import React,{ useEffect, useState } from "react";
import "./Form.css";
import * as Yup from "yup"
import axios from "axios";
 //YUPPP GELİYOR

 const userSchema = Yup.object().shape({
  isim:Yup.string().required().min(2,"İsim en az 2 karakter olmalıdır"),
  boyut:Yup.string().required("Boyut Seçiniz"),
  cesit:Yup.string().required("Bir Pizza Seçiniz"),

  malzeme2:Yup.string(),
  ozel:Yup.string(),
});
//checkbox , yupsuz kontrol

const Form = (props) => {
    const {submitCallBack,orderlist,setOrderList}=props;

    const emptyOrder={
      isim: "",
      boyut: "",
      cesit: "",  
      malzeme1: [],
      malzeme2: "",
      ozel: "",
  }
    const [order,setOrder]= useState(emptyOrder)
       //ERRORR    
      
    const [orderErr,SetOrderErr]=useState({
      isim: "İsim Giriniz",
      boyut: "",
      cesit: "",
 
      malzeme2: "",
      ozel: "",
  });
  const [dis,setDis]=useState(true);
  useEffect(()=>{
    userSchema.isValid(order).then((valid)=>setDis(!valid))
  
  },[order])

    const errorCreate=(name,value)=>{
      Yup.reach(userSchema,name).validate(value)
      .then(()=> {SetOrderErr({...orderErr,[name]:""})})
      .catch((error)=>{SetOrderErr({...orderErr,[name]:error.errors[0]})})
    }
    const showAlert=()=>{
      alert("Siparişiniz Hazırlanıyorr !!")
    }

      
      const pizza={select:["Eko Sucuklu Pizza",
      "Margarita Pizza",
      " White Pizza",
      "4 Peynirli Pizza",
      " Barbekü Tavuklu Pizza.",
       " Supreme Pizza",
        "Pepperoni Pizza",
        "Gennaro Pizza"],
        extra:["Ek Malzeme İstemiyorum","Ek Malzeme İstemiyorum","Sucuk","Pastırma","Biber"],

        extra1:["Salam","Sosis","Susam"]}
        
        const handleSubmitOrder=(event)=>{
          event.preventDefault();
          // axios.post("https://reqres.in/api/orders",order).then((response)=>{
          //   let orders=[...orderlist,response.name]
          // setOrderList(orders);
          
          //  })
         submitCallBack(order);
        }
        
        const handleChangeOrder= (event)=>{
          const {value,name,type,checked}=event.target;
          errorCreate(name,type==="checkbox" ? checked:value);
        
          setOrder({...order,[name]:type==="checkbox" ? checked:value})
        }

        const handleChangeCheck= (event)=>{
          const {value} = event.target;
          let malz= null;
        
          if(order.malzeme1.includes(value)){
            malz= order.malzeme1.filter((item)=> item !== value)
            console.log(malz)
          }
          else{
            malz=[...order.malzeme1,value]
            console.log(malz)
          }

          (malz.length>1)? SetOrderErr({...orderErr,malzeme1: `Ek Malzeme: +${9*(malz.length-1)}₺`}) :SetOrderErr({...orderErr,malzeme1: "İlk Malzeme Bizden :P"})

          setOrder({...order,malzeme1:malz})
         }
        
  return (
    <form id="pizza-form" onSubmit={handleSubmitOrder}>
    <fieldset >
     <legend>Gel AL Pizza</legend>
        
        <label>
            <h3>Teslimat İsmi</h3>
            <input data-cy="name-checked" name="isim" id="name-input"type="text" value={order.isim} onChange={handleChangeOrder} ></input>
        </label>
        <div className="t-error">{orderErr.isim !== "" && <div>{orderErr.isim}</div>}</div>
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
                <div className="t-error">{orderErr.boyut !== "" && <p id="y-error">{orderErr.boyut}</p>}</div>
        </label>
        <label htmlFor="s-dropdown" >
                <div className="p-size">
                <h3>Pizza Seçimi</h3>
                    <select name="cesit" id="s-dropdown" onChange={handleChangeOrder}value={order.cesit} >
                    <option id="e-pizza" value="" name="cesit">Lütfen Bir Pizza Seçiniz</option>
                       {pizza.select.map((item)=>(
                        
                        <option key={item} id="e-pizza" value={item}name="cesit">{item}</option>
                       ))} 
                       
                    </select>
                </div>
                <div className="t-error">{orderErr.cesit !== "" && <p id="y-error">{orderErr.cesit}</p>}</div>
        </label>
        <label htmlFor="extra-rad" >
                <div className="p-extra">
                    <h3>Ek Malzeme</h3>
                    <div>
                    
                        <label > {pizza.extra[2]}
                            <input  type="checkbox" id="extra-rad" name={"malzeme1"} value={"sucuk"} onChange={handleChangeCheck} checked={order.malzeme1.includes("sucuk")}/>
                        </label>
                        <label > {pizza.extra[3]}
                            <input  type="checkbox" id="extra-rad" name={"malzeme1"} value={"pastırma"} onChange={handleChangeCheck} checked={order.malzeme1.includes("pastırma")} /> 
                        </label>
                        <label > {pizza.extra[4]}
                            <input  type="checkbox" id="extra-rad" name={"malzeme1"} value={"biber"} onChange={handleChangeCheck} checked={order.malzeme1.includes("biber")}/>
                        </label>  
                    </div>
                    <div className="t-error">{orderErr.malzeme1 !== "" && <p>{orderErr.malzeme1}</p>}</div>
                </div>
        </label>
         <label htmlFor="extra-radio" >
                <div className="p-extra">
                <h3>Ek Malzeme 2</h3>
                <div>
                       {pizza.extra1.map((item)=>(
                        <label key={item}> {item}
                          <input type="radio" id="extra-radio" name="malzeme2" value={item} onChange={handleChangeOrder}/>
                        </label>
                        ))} 
                    </div>
                </div>
        </label> 
        <label htmlFor="special-text" >
                <div className="p-special">
                <h3>Bize bir notunuz var mı ?</h3>
                <input type="text" id="special-text" name="ozel" value={order.ozel} onChange={handleChangeOrder}/>          
                </div>
        </label>
        <div>{orderErr.ozel == "" && <p>{orderErr.ozel}</p>}</div>



        <button cy-data="submit-checked"type="submit" id="order-button" disabled={dis} onClick={showAlert}>Sipariş Ekle</button>
  
       

    </fieldset>
 </form>
    
  );
};
export default Form;

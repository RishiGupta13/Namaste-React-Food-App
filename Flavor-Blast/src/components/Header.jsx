import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import pizzeria from '../assets/pizzeria.jpg';
import { useSelector } from "react-redux";

export const Header = () => {

  const [log,setLog]=useState("Login");
 
  const changeName=()=>{
    if(log=="Login"){
      setLog("Logout");
    }
    else{
      setLog("Login");
    }
    
  }

  const cartItems=useSelector((store)=>store.cart.items);
  

  return (
    <div className="header">
      <div className="logo">
        <img src={pizzeria} className="pizzeria-img"></img>
        <h6 className="title font-bold">Eat Street</h6>
      
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
            <Link to="/about">
              About Us
             </Link>
           </li>

          <li>
            <Link to="/cart">
            Cart-{cartItems.length}</Link> 
           </li>
          <button onClick={changeName}>{log}</button>
        </ul>
      </div>
    </div>
  );
};

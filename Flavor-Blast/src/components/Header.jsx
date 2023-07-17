import { useState } from "react";
import "./styles.css";

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
  

  return (
    <div className="header">
      <div className="logo">
        <img src="src/assets/pizzeria.jpg" className="pizzeria-img"></img>
        <h6 className="title">Flavor Blast</h6>
      
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us </li>
          <li>Cart</li>
          <button onClick={changeName}>{log}</button>
        </ul>
      </div>
    </div>
  );
};

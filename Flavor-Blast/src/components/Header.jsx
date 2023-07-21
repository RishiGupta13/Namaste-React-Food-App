import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

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
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
            <Link to="/about">
              About Us
             </Link>
           </li>

          <li>
            <Link to="/contact">
            Contact us</Link> 
           </li>
          <button onClick={changeName}>{log}</button>
        </ul>
      </div>
    </div>
  );
};

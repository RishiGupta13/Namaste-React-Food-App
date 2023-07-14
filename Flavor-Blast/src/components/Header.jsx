import "./styles.css";

export const Header = () => {

  

  return (
    <div className="header">
      <div className="logo">
        <img src="src/assets/pizzeria.jpg" className="pizzeria-img"></img>
        <h5 className="title">Flavor Blast</h5>
      
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
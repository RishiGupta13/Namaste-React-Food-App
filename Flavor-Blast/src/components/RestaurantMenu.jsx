/* eslint-disable no-unsafe-optional-chaining */
import { Shimer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantmenu } from "./utils/useRestaurantmenu";
import './styles.css'
export const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo=useRestaurantmenu(resId);

  if (resInfo === null) return <Shimer />;

  const { name, cuisines, costForTwoMessage } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            <div>{item.card.info.description}</div>
            <img className="foodImage" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.card.info.imageId}></img>

          </li>
        ))}
      </ul>
    </div>
  );
};


/* eslint-disable no-unsafe-optional-chaining */
import { Shimer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantmenu } from "./utils/useRestaurantmenu";
import './styles.css'
import { useState } from "react";
import { RestaurantCategory } from "./RestaurantCategory";
export const RestaurantMenu = () => {
    const [showIndex,setshowIndex]=useState(null);

  const { resId } = useParams();

  const resInfo=useRestaurantmenu(resId);


  if (resInfo === null) return <Shimer />;

  const { name, cuisines, costForTwoMessage } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    resInfo?.cards[0]?.card?.card?.info;

  // eslint-disable-next-line no-unused-vars
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
        c.card?.card?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );


  return (
    <div className=" text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {
        categories.map((category,index)=>{
            return (
                <RestaurantCategory 
                key ={category?.card?.card.title}
                data={category?.card?.card}
                showItems={ index==showIndex ? true : false}
                setshowIndex={()=>setshowIndex(index)}>

            </RestaurantCategory>

            )
            
        })
      }
      

    </div>
  );
};


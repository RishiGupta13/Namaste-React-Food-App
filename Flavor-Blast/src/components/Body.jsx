import {RestaurantCard} from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';
export const Body = () => {

  
  const [listOfRestaurants,setlistofRestaurants]=useState(resList);

  return (
    <div className="body">
        <button onClick={()=>{
            const filteredList=listOfRestaurants.filter(
              (res)=>
                res.data.avgRating>4
            );
            setlistofRestaurants(filteredList);
        }}
        >
          Top Rated Restaurants</button>
        
        <div className="res-container">

        { listOfRestaurants.map((restaurant)=>(
           <RestaurantCard key={restaurant.id} resData={restaurant}/>
        ))}   
        </div>
    </div>
  );
};


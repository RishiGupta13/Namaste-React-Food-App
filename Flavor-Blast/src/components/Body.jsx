import {RestaurantCard} from './RestaurantCard';
import { useEffect, useState } from 'react';
import { Shimer } from './Shimmer';
export const Body = () => {

  
  const [listOfRestaurants,setlistofRestaurants]=useState([]);
  const [filteredRes,setfilteredRes]=useState([]);


  const [searchText,setsearchText] =useState("");



  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async ()=>{
        const data=await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352156&lng=77.6199608&page_type=DESKTOP_WEB_LISTING"
          );

          const json=await data.json();

          console.log(json);
          setlistofRestaurants(json?.data?.cards[2]?.data?.data?.cards)
          setfilteredRes(json?.data?.cards[2]?.data?.data?.cards)

  };

  // if(listOfRestaurants.length<=0){
  //   return <Shimer/>
  // }

  return (
    <div className="body">

      <input 
        className='search'
        type='text'
        value={searchText}

        onChange={(e)=>{
          setsearchText(e.target.value);
        }}
      ></input>

      <button
         onClick={()=>{
          const filteredRes=listOfRestaurants.filter((res)=>(
            res.data.name.toLowerCase().includes(searchText.toLowerCase())
            
          ));
          setfilteredRes(filteredRes);
         }}
         
      >Search</button>

    


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

        { filteredRes.map((restaurant)=>(
           <RestaurantCard key={restaurant.id} resData={restaurant}/>
        ))}   
        </div>
    </div>
  );
};


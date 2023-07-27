import {RestaurantCard,withPromotedLabel} from './RestaurantCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from './utils/useOnlineStatus';

export const Body = () => {

  
  const [listOfRestaurants,setlistofRestaurants]=useState([]);
  const [filteredRes,setfilteredRes]=useState([]);
  const [searchText,setsearchText] =useState("");

  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);


  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async ()=>{
        const data=await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352156&lng=77.6199608&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          

          const json=await data.json();
          setlistofRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setfilteredRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          console.log(json);

  };

  // if(listOfRestaurants.length<=0){
  //   return <Shimer/>
  // }

  const status=useOnlineStatus();

  if(status===false){
    return <h1>Oops seems like you lost your internet Connection</h1>
  }

  return (
    <div className="body">
      <div className='flex justify-end mt-5 mb-4' >
      <input 
        className='search border border-solid border-black rounded-lg '
        type='text'
        value={searchText}
        
        onChange={(e)=>{
          setsearchText(e.target.value);
        }}
      ></input>

      <button
         onClick={()=>{
          const filteredRes=listOfRestaurants.filter((res)=>(
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
            
          ));
          setfilteredRes(filteredRes);
         }}

         className=' bg-orange-500 rounded-md px-4 py-2 w-50 text-white font-semibold ml-3 mr-3'
         
      >Search</button>

        <button onClick={()=>{
            const filteredList=[...listOfRestaurants].filter(
              (res)=>res.info.avgRating>4);
              
  
            setfilteredRes(filteredList);
        }}
        className=' bg-orange-500 rounded-md px-4 py-2 w-50 text-white font-semibold ml- mr-14 '
        >
          Top Rated Restaurants</button>

          </div>
        
        <div className="res-container">

        { filteredRes.map((restaurant)=>(
          <Link 
          key={restaurant.info.id}
          to={"/restaurant/"+restaurant.info.id}>
            {
              restaurant.info.promoted?(
                <RestaurantCardPromoted  resData={restaurant}/>
              ) : (
                <RestaurantCard  resData={restaurant}/>
              )
              
            }
           
            
          </Link>
        ))

        }   
        </div>
    </div>
  );
};




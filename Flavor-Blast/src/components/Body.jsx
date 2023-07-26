import {RestaurantCard} from './RestaurantCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from './utils/useOnlineStatus';
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
          setlistofRestaurants(json?.data?.cards[2]?.data?.data?.cards)
          setfilteredRes(json?.data?.cards[2]?.data?.data?.cards)
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
      <div className='flex justify-end mt-4' >
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
            res.data.name.toLowerCase().includes(searchText.toLowerCase())
            
          ));
          setfilteredRes(filteredRes);
         }}

         className=' bg-blue-700 rounded-md px-4 py-2 w-50 text-white font-semibold ml-3 mr-3'
         
      >Search</button>

        <button onClick={()=>{
            const filteredList=[...listOfRestaurants].filter(
              (res)=>res.data.avgRating>4);
              console.log(filteredList)
  
            setfilteredRes(filteredList);
        }}
        className=' bg-blue-800 rounded-md px-4 py-2 w-50 text-white font-semibold ml- mr-0 '
        >
          Top Rated Restaurants</button>

          </div>
        
        <div className="res-container">

        { filteredRes.map((restaurant)=>(
          <Link 
          key={restaurant.data.id}
          to={"/restaurant/"+restaurant.data.id}>
            <RestaurantCard  resData={restaurant}/>
          </Link>
        ))}   
        </div>
    </div>
  );
};




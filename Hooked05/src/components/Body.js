import RestaurantCard from "./RestaurantCard";
import { reslist } from "../utlis/mockData";
import {useState} from "react";


const Body = () => {
 const [listOfRestaurants, setListOfRestaurants] = useState(reslist)



    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
             onClick={()=>{
              const filteredRestaurant = listOfRestaurants.filter((res)=>{
                   return (res.info.avgRatingString > 4)
              })
              setListOfRestaurants(filteredRestaurant)
             }}
            
          >
              Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
         {
         listOfRestaurants .map((restaurant)=>{
             return(
             <RestaurantCard key={restaurant.info.id} resData={restaurant}/>) 
          })
         }
          
        </div>
      </div>
    );
  };

  export default Body;
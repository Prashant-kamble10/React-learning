import RestaurantCard from "./RestaurantCard";
// import { reslist } from "../utlis/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
import useOnlineStatus from "../utlis/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [reastaurantListForSearch, setReastaurantListForSearch] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.143829046920402&lng=72.99352884292604&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json: ", json);

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); // optional chaining

    setReastaurantListForSearch(                                                  // this to prevent from search bugg
    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

const onlineStatus = useOnlineStatus()

if(onlineStatus === false){
  return (<h1> Looks like you're offline!! Please check your internet connection.</h1>)
}

  return listOfRestaurants.length === 0 ? (
    <Shimmer /> // Ternary Operator
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const searchedList = listOfRestaurants.filter(
                (res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLocaleLowerCase());
                }
              );

              setReastaurantListForSearch(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) => {
              return res.info.avgRatingString > 4; // filter logic
            });
            setReastaurantListForSearch(filteredRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {reastaurantListForSearch.map((restaurant) => {
          return (
           <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id }> <RestaurantCard  resData={restaurant} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

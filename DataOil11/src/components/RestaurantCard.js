import { useContext } from "react";
import { CDN_URL } from "../utlis/constants";
import UserContext from "../utlis/UserContext";



const RestaurantCard = (props) => {
  
    const {resData} = props;
    const { loggedInUser } = useContext(UserContext);
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData?.info;
  
  
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-lg"
          src= {CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h3>{deliveryTime}</h3>
        <h4  className="px-4 font-extrabold">{loggedInUser}</h4>
      </div>
    );
  };

// Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) =>{
 return  (props) =>{
  return (
    <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
            Promoted
          </label>
          <RestaurantCard {...props}/>
    </div>
   )
 }
}





  export default RestaurantCard;
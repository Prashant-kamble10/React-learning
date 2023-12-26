import { CDN_URL } from "../utlis/constants";


const RestaurantCard = (props) => {
  
    const {resData} = props;
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData?.info;
  
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src= {CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h3>{deliveryTime}</h3>
      </div>
    );
  };

  export default RestaurantCard;
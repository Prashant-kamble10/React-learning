import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utlis/useRestautantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
// Displaying RestaurantMenu logic here
    const {resId} = useParams()


  const resInfo = useRestaurantMenu(resId);             // customHooks

  if (resInfo === null) return <Shimmer />;
  // resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

  const { name, city } = resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  
  console.log("itemCards: ", itemCards);

  return (
    <>
      <h1>{name} </h1>
      <h2>{city}</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantMenu;

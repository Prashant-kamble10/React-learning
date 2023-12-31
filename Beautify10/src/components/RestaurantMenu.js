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
      <div className="m-4 p-4">
      <div className="mb-4">
      <h1 className="text-2xl">{name} </h1>
      <h2 className="text-2xl">{city}</h2>
      </div>
      <ul >
        {itemCards.map((item) => (
          <li className="list-disc" key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;

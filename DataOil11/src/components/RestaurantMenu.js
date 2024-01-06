import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utlis/useRestautantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // Displaying RestaurantMenu logic here
  const { resId } = useParams();

  const dummy = "Dummy Data";
  const resInfo = useRestaurantMenu(resId); // customHooks
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  // resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

  const { name, city } = resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log("itemCards: ", itemCards);

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories :", categories);

  return (
    <>
      <div className="m-4 p-4 text-center">
        <div className="mb-4">
          <h1 className=" font-bold my-6 text-2xl">{name} </h1>
          <h2 className=" font-bold text-lg">{city}</h2>
        </div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;

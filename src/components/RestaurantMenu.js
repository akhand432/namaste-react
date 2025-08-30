import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  let { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const [resInfo, resMenu, resCategory] = useRestaurantMenu(resId);

  if (resMenu?.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, city } = resInfo || {};

  return (
    <div className="text-center p-4 m-4">
      <h1 className="font-bold text-lg">Restaurant Name - {name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <h4>{city}</h4>
      <p>Details of the restaurant menu will be displayed here.</p>
      {resCategory.length > 0 &&
        resCategory.map((category, index) => (
          <RestaurantCategory 
          category={category}
          key={index}
          showItems={index === showIndex && true}
          setShowIndex={ () => setShowIndex(index)}/>
        ))}
    </div>
  );
};

export default RestaurantMenu;

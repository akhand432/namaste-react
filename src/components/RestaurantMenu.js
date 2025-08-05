import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  let { resId } = useParams();
  
  const [resInfo, resMenu] = useRestaurantMenu(resId);

  if(resMenu?.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, city } = resInfo || {};

  return (
    <div className="restaurant-menu">
      <h1>Restaurant Name - {name}</h1>
      <h2>{ cuisines.join(', ') }</h2>
      <h3>{costForTwoMessage }</h3>
      <h4>{city}</h4>
      <p>Details of the restaurant menu will be displayed here.</p>
      <ul>
        {resMenu.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price ? `₹${item.card.info.price / 100}` : "Price not available"}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

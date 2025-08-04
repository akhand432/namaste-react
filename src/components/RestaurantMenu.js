import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  let { resId } = useParams();
  useEffect(() => {
    const fetchRestaurantMenu = async () => {
      resId = resId.split(":")[1];
      const response = await fetch(MENU_URL + resId);
      const data = await response.json();
      const menuItems = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
      setResMenu(menuItems);
    };
    fetchRestaurantMenu();
  }, []);

  if(resMenu?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="restaurant-menu">
      <h1>Restaurant Menu</h1>
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

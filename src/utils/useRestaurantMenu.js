import { useState, useEffect } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState([]);
    const [resMenu, setResMenu] = useState([]);
    const [resCategory, setResCategory] = useState([]);

    useEffect(() => {
        const fetchRestaurantMenu = async () => {
            resId = resId.split(":")[1];
            const response = await fetch(MENU_URL + resId);
            const data = await response.json();
            const resInfo = data?.data?.cards[2]?.card?.card?.info;
            const menuItems = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
            const resCategory = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const renderCategory = resCategory.filter(category => category.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

            setResMenu(menuItems);
            setResInfo(resInfo);
            setResCategory(renderCategory);
        };
        fetchRestaurantMenu();
    }, [resId]);
    return [resInfo, resMenu, resCategory];
}

export default useRestaurantMenu;
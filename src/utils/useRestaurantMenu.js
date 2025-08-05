import { useState, useEffect } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState([]);
    const [resMenu, setResMenu] = useState([]);

    useEffect(() => {
        const fetchRestaurantMenu = async () => {
            resId = resId.split(":")[1];
            const response = await fetch(MENU_URL + resId);
            const data = await response.json();
            const resInfo = data?.data?.cards[2]?.card?.card?.info;
            const menuItems = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
            setResMenu(menuItems);
            setResInfo(resInfo);
        };
        fetchRestaurantMenu();
    }, [resId]);
    return [resInfo, resMenu];
}

export default useRestaurantMenu;
import { useState, useEffect } from "react";
import RestarantCard, { withPromotedLabel } from "./RestarantCard";
import Shimmer from "./Shimmer";
import restaurantList from "../utils/RestaurantList.json";
import { Link } from "react-router";
import { RESTAURANT_FETCH_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onlineStatus = useOnlineStatus();

  const PromotedRestaurantCard = withPromotedLabel(RestarantCard);

  if(!onlineStatus) {
    return <h1>Looks like you are offline. Please check your internet connection.</h1>;
  }

  useEffect(() => {
    let fetchRestaurantList = async () => {
      const restaurantLists = await fetch(RESTAURANT_FETCH_URL);
      const json = await restaurantLists.json();
      const data =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setresList(data ? data : restaurantList.restaurants);
      setFilteredResList(data ? data : restaurantList.restaurants);
    };
    fetchRestaurantList();
  }, []);

  const filterSearch = () => {
    const filteredList = resList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResList(filteredList);
  };

  const filterTopRatedRestaurants = () => {
    const topRated = resList.filter(
      (restaurant) => restaurant.info.avgRating > 4.0
    );
    setFilteredResList(topRated);
  };

  return resList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="searchFilterSection flex justify-between">
        <div className="search p-4 m-4">
          <input className="border border-gray-400 rounded-lg p-2"
            type="text"
            placeholder="Search for restaurants"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn rounded-lg bg-gray-200 shadow-lg p-4 m-4" onClick={() => filterSearch()}>
            Search
          </button>
        </div>
        <div className="filter p-4 mx-4">
          <button className="btn shadow-lg p-4 m-4 rounded-lg bg-gray-200" onClick={() => filterTopRatedRestaurants()}>
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {filteredResList?.map((restaurant) => (
          <Link className="card-link" to={"restaurantMenu/:" + restaurant.info.id} key={restaurant.info.id}>{
            restaurant.info.promoted ? (
              <PromotedRestaurantCard {...restaurant.info} />
            ) : (
              <RestarantCard {...restaurant.info} />
            )
          }</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

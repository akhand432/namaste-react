import { useState, useEffect } from "react";
import RestarantCard from "./RestarantCard";
import Shimmer from "./Shimmer";
import restaurantList from "../utils/RestaurantList.json";
import { Link } from "react-router";
import { RESTAURANT_FETCH_URL } from "../utils/constant";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      <div className="searchFilterSection">
        <div className="search">
          <input
            type="text"
            placeholder="Search for restaurants"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn" onClick={() => filterSearch()}>
            Search
          </button>
        </div>
        <div className="filter">
          <button className="btn" onClick={() => filterTopRatedRestaurants()}>
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredResList?.map((restaurant) => (
          <Link className="card-link" to={"restaurantMenu/:" + restaurant.info.id} key={restaurant.info.id}><RestarantCard {...restaurant.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

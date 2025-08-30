import ItemList from "./ItemList";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="flex-col align-center w-6/12 mx-auto bg-gray-200 p-4 shadow-lg cursor-pointer my-4">
      <div
        className="flex justify-between"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {category?.card?.card?.title} (
          {category?.card?.card?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={category?.card?.card?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  return (
    <div className="text-left">
      {items.length > 0 &&
        items.map((item) => (
          <div key={item?.card?.info?.id} className="py-2">
            <span className="font-semibold pr-1 py-1">
              {item?.card?.info?.name}
            </span>
            <span>
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <div className="flex">
              <p className="text-sm w-10/12">{item?.card?.info?.description}</p>
              <div className="w-2/12 flex items-center justify-center relative">
                <img src={CDN_URL + item?.card?.info?.imageId} className="w-full rounded" />
                <button
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 border rounded px-2 py-1 text-sm font-semibold shadow transition hover:bg-green-100 hover:border-green-400 hover:text-green-700"
                  style={{ minWidth: '60px', minHeight: '28px' }}
                >
                  Add +
                </button>
              </div>
            </div>  
          </div>
        ))}
    </div>
  );
};

export default ItemList;

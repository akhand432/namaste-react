import { CDN_URL } from '../utils/constant';

const RestarantCard = (resList) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = resList;
    return (
        <div className="w-52 rounded-lg shadow-lg p-4 m-2 bg-white text-center">
            <img alt="res_logo" src={CDN_URL + cloudinaryImageId} className='rounded-lg'></img>
            <h3>{name}</h3>
            <div className="text-wrap">{cuisines.join(', ')}</div>
            <div className="info-row">
                <span className="avg-rating">{avgRating}</span>
                <span className="delivery-time">{sla?.deliveryTime} mins</span>
            </div>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="promoted-card">
                <RestaurantCard {...props} />
                <span className="promoted-label">Promoted</span>
            </div>
        );
    }
}

export default RestarantCard;
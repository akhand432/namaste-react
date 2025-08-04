import { CDN_URL } from '../utils/constant';

const RestarantCard = (resList) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = resList;
    return (
        <div className="res-card">
            <img alt="res_logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <div className="cuisines-row">{cuisines.join(', ')}</div>
            <div className="info-row">
                <span className="avg-rating">{avgRating}</span>
                <span className="delivery-time">{sla?.deliveryTime} mins</span>
            </div>
        </div>
    )
}

export default RestarantCard;
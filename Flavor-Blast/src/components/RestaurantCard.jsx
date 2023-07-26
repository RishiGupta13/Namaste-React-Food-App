import "./styles.css";

// eslint-disable-next-line react/prop-types
export const RestaurantCard = (props) => {
    const {resData} = props;

    const {name,cuisines,costForTwoString,deliveryTime,avgRating,cloudinaryImageId}=resData?.data;
  return (
    <div className="res-card  ">
        <img className="w-56 h-40 ml-6 mt-7 rounded-md"
         src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}>

        </img>

        <div className="res-name">
            <div className="res-title">{name}</div>
            <div className="res-food">{cuisines.join(", ")}</div>
        </div>

        <div className="res-desc">
          <div className="rating-star">
            <span className="icon-star"></span>
            <span className="rating">{avgRating}</span>
          </div>
            
            <div>•</div>
            <div>{deliveryTime} mins</div>
            <div>•</div>
            <div>{costForTwoString}</div>            
        </div>


    </div>
  )
}


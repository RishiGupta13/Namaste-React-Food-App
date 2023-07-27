/* eslint-disable react/display-name */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import "./styles.css";

// eslint-disable-next-line react/prop-types
export const RestaurantCard = (props) => {
    const {resData} = props;

    const {name,cuisines,costForTwo,avgRating,cloudinaryImageId}=resData?.info;
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
            <div>{resData.info.sla.deliveryTime} mins</div>
            <div>•</div>
            <div>{costForTwo}</div>            
        </div>


    </div>
  )
};


//HOC
export const withPromotedLabel=(RestaurantCard)=>{
  return (props) => {
    return (
      <div>
        <label className="text-white bg-black rounded-lg p-2 absolute m-2 ">
          Promoted
        </label>
        <RestaurantCard  {...props}/>
      </div>
    )
  }
}
withPromotedLabel.displayName="ResPromoted";


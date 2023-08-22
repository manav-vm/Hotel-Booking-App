import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from city center</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation Available</span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Inclusive of all taxes</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Check Availablity</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SearchItem;

import  "../../Css/watches-grid-items.css"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const WatchGridItem = ({ image, title, description, link }) => {
  return (
    <div className="watches-grid-child">
    <img src={image} alt={title} />
    <div className="overlay">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}>View More</Link>
    </div>
  </div>
  )
  
}

WatchGridItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };
  

export default WatchGridItem

import { Link } from "react-router-dom";

const FeaturesItem = ({ title, color, icon }) => {
  return (
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className={icon} style={{ color }}></i>
        <h3>
          <Link to="/">{title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default FeaturesItem;

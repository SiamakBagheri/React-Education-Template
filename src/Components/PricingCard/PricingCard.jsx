import React from "react";

const PricingCard = ({ title, price, featured, advanced, children }) => {
  return (
    <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
      <div className={`box ${featured && "featured"}`}>
        {advanced && <span class="advanced">Advanced</span>}
        <h3>{title}</h3>
        <h4>
          <sup>$</sup>
          {price}
          <span> / month</span>
        </h4>
        <ul>{children}</ul>
        <div class="btn-wrap">
          <a href="#" class="btn-buy">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;

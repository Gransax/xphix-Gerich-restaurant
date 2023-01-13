import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-heading">
      <div className="app__menuitem-heading_title">
        <p className="p__cormorant">{title}</p>
      </div>

      <div className="app__menuitem-dash" />
      <div className="app__menuitem-heading_price">
        <p>{price}</p>
      </div>
    </div>
    <div className="app__menuitem-sub">
      <p className="p__opensans p__color">{tags}</p>
    </div>
  </div>
);

export default MenuItem;

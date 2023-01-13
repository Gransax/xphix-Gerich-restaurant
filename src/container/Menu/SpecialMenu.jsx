import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialmenu flex__center section__padding" id="menu">
    <div className="app__specialmenu-heading">
      <SubHeading title="Menu That Fits Your Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialmenu-menu">
      <div className="app__specialmenu-menu_wines">
        <h3 className="app__specialmenu-menu-title">Wine & Beer</h3>
        <div className="app__specialmenu-menu-items">
          {data.wines.map(({ title, price, tags }, index) => (
            <MenuItem
              key={`wine-${index}`}
              title={title}
              price={price}
              tags={tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialmenu-menu_img">
        <img src={images.menu} alt="special-menu" />
      </div>
      <div className="app__specialmenu-menu_cocktails">
        <h3 className="app__specialmenu-menu-title">Cocktails</h3>
        <div className="app__specialmenu-menu-items">
          {data.cocktails.map(({ title, price, tags }, index) => (
            <MenuItem
              key={`cocktail-${index}`}
              title={title}
              price={price}
              tags={tags}
            />
          ))}
        </div>
      </div>
    </div>
    <button type="button" className="custom__button">
      View More
    </button>
  </div>
);

export default SpecialMenu;

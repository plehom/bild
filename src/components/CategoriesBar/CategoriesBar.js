import React from "react";
import "./CategoriesBar.css";
import Menu from "../../icons/Group 4463menu.svg";
import Fruits from "../../icons/Group 3410Fruits.svg";
import Meat from "../../icons/Group 3411Meat.svg";
import Milk from "../../icons/Group 3412Milk.svg";
import Frozen from "../../icons/Group 3413FrozenProducts.svg";
import Bread from "../../icons/Group 3414Bread.svg";
import RightArrow from "../../icons/VectorarrowRight.svg";
import DownArrow from "../../icons/down-arrow-svgrepo-com.svg";
import UpArrow from "../../icons/up-arrow-svgrepo-com.svg";
import { getTranslation } from "../../Utils/getLanguage";
import AllCategories from "../AllCategories/AllCategories";

import LongDevider from "../LongDevider/LongDevider";
import CategoriesDropDownList from "../../Utils/CategoriesDropDownList";

function CategoriesBar(props) {
  const tabs = [
    { text: "Fruits & Vegetables", icon: Fruits },
    { text: "Meat & Poultry", icon: Meat },
    { text: "Milk & Dairy", icon: Milk },
    { text: "Frozen Products", icon: Frozen },
    { text: "Bread", icon: Bread },
  ];

  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);
  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));

  const [showAllCategories, setShowAllCategories] = React.useState(false);

  return (
    <div className="CategoriesBar">
      <div
        className="CategoriesBarContainer"
        style={
          windowWitdth <= 700
            ? { justifyContent: "center" }
            : { justifyContent: "flex-start" }
        }
      >
        <div onClick={() => setShowAllCategories(!showAllCategories)}>
          <span>{getTranslation("All Categories")}</span>
          <img
            style={{
              paddingRight: "20px",
              width: "min(4vw, 15px)",
            }}
            src={showAllCategories ? UpArrow : DownArrow}
            alt=""
          />
        </div>

        {windowWitdth >= 700 && (
          <>
            {tabs.map((elem, index) => {
              return (
                <div key={index}>
                  {windowWitdth / index > 400 && (
                    <>
                      <div onClick={() => console.log(elem.text)}>
                        <img src={elem.icon} alt="" />
                        <span>{elem.text}</span>
                      </div>
                      <div
                        style={{
                          width: "1px",
                          marginRight: "15px",
                          height: "20px",
                          backgroundColor: "rgb(224, 224, 224)",
                        }}
                      ></div>
                    </>
                  )}
                </div>
              );
            })}
            <div onClick={() => setShowAllCategories(!showAllCategories)}>
              <span>{getTranslation("See more")}</span>
              <img src={RightArrow} alt="" />
            </div>
          </>
        )}
      </div>
      {showAllCategories && (
        <>
          <LongDevider />
          <AllCategories
            tabs={CategoriesDropDownList()}
            isMobile={false}
            onClose={() => setShowAllCategories(false)}
          />
        </>
      )}
    </div>
  );
}

export default CategoriesBar;

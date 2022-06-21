import React from "react";
import "./DiscountBar.css";
import Discounts from "../../icons/GroupDiscounts.svg";
import Bio from "../../icons/GroupBio.svg";
import Products from "../../icons/GroupNewProducts.svg";
import GiftCards from "../../icons/GroupGiftcards.svg";
import Recipes from "../../icons/GroupRecipies.svg";
import GoHalalFamily from "../../icons/VectorGoHalalFamily.svg";
import Zakat from "../../icons/GroupZakat.svg";
import Blog from "../../icons/GroupBlog.svg";
import DiscountButton from "../DiscountButton/DiscountButton";

function DiscountBar(props) {
  const tabs = {
    row1: [
      { text: "Discounts & Offers", icon: Discounts },
      { text: "Bio Products", icon: Bio },
      { text: "New Products", icon: Products },
      { text: "Recipes", icon: Recipes },
    ],

    row2: [
      { text: "Go Halal Family", icon: GoHalalFamily },
      { text: "Gift Cards", icon: GiftCards },
      { text: "Zakat", icon: Zakat },
      { text: "Blog", icon: Blog },
    ],
    row3: [
      { text: "Discounts & Offers", icon: Discounts },
      { text: "Bio Products", icon: Bio },
    ],
    row4: [
      { text: "New Products", icon: Products },
      { text: "Recipes", icon: Recipes },
    ],
    row5: [
      { text: "Go Halal Family", icon: GoHalalFamily },
      { text: "Gift Cards", icon: GiftCards },
    ],
    row6: [
      { text: "Zakat", icon: Zakat },
      { text: "Blog", icon: Blog },
    ],

    allRows: [
      { text: "Discounts & Offers", icon: Discounts },
      { text: "Bio Products", icon: Bio },
      { text: "New Products", icon: Products },
      { text: "Recipes", icon: Recipes },
      { text: "Go Halal Family", icon: GoHalalFamily },
      { text: "Gift Cards", icon: GiftCards },
      { text: "Zakat", icon: Zakat },
      { text: "Blog", icon: Blog },
    ],
  };

  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));

  return (
    <div className="DiscountBar">
      <div
        className="DiscbountBarContainer"
        style={
          windowWitdth >= 1200 ? { marginTop: "20px" } : { marginTop: "0" }
        }
      >
        {/* {windowWitdth > 1250 && ( */}
        <div className="DiscountBarRow">
          {tabs.allRows.map((elem, index) => {
            return (
              <DiscountButton
                paddingRight={
                  index === tabs.allRows.length - 1 ? "0" : "min(4vw, 10px)"
                }
                paddingLeft={index === 0 ? "0" : "min(4vw, 10px)"}
                elem={elem}
                key={index}
              />
            );
          })}
        </div>
        {/* )} */}
        {/* {windowWitdth <= 1250 && windowWitdth > 750 && (
          <div className="DiscbountBarContainer">
            <div className="DiscountBarRow">
              {tabs.row1.map((elem, index) => {
                return <DiscountButton elem={elem} key={index} />;
              })}
            </div>
            <div className="DiscountButton">
              {tabs.row2.map((elem, index) => {
                return <DiscountButton elem={elem} key={index} />;
              })}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default DiscountBar;

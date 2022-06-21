import React from "react";
import { getTranslation } from "../../Utils/getLanguage";
import "./BottomMenu.css";
import Phone from "../../icons/VectorPhone.svg";
import Address from "../../icons/Vector (2).svg";
import Mail from "../../icons/Vector (3).svg";

import LanguageButton from "../LanguageButton/LanguageButton";
import DropDownClickList from "../DropDownClickList/DropDownClickLIst";
import BottomMenuListMenu from "../BottomMenuListMenu/BottomMenuListMenu";

function BottomMenu(props) {
  const tabs = [
    {
      header: "Useful Links",
      list: [
        "About Us",
        "Our Story",
        "Our Suppliers",
        "Go Halal Family",
        "Career",
        "Policy",
        "Press",
        "Social Media",
        "Sitemap",
      ],
    },
    {
      header: "Help Center",
      list: [
        "Payments",
        "Pickup or Shipping",
        "Discounts & Offers",
        "Product Returns",
        "Product Recalls",
        "FAQ",
        "Checkout",
        "Other Issues",
        "Contact Us",
      ],
    },
    {
      header: "GoHalal Business",
      list: [
        "Sell on Go Halal",
        "Affiliate Program",
        "Our Suppliers",
        "Accessibility",
        "Advertise With Us",
      ],
    },
  ];

  const [windowWidth, setWindowWidth] = React.useState(null);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className="BottomMenu">
      <div
        className="BottomMenuContainer"
        style={
          windowWidth <= 1500
            ? { flexDirection: "column" }
            : { flexDirection: "row" }
        }
      >
        {windowWidth > 650 && (
          <div
            className="VerticalDiv LongDiv"
            style={
              (windowWidth <= 1500) & (windowWidth >= 800)
                ? { marginBottom: "30px", marginRight: "0" }
                : windowWidth >= 1500
                ? { marginBottom: "0", marginRight: "40px" }
                : { marginBottom: "1em", marginRight: "0px" }
            }
          >
            <span className="BottomMenuHeader">
              {windowWidth > 800
                ? getTranslation("Go Halal -The Do Good, Good Food Grocer")
                : getTranslation("Contact Information")}
            </span>
            {windowWidth > 800 && (
              <span style={{ cursor: "auto" }} className="BottomMenuText">
                {getTranslation(
                  "Go Halal is an innovative supermarket offering the highest quality halal products available online and in store. Our promise of Zakat ensures helping those in need while our unique traceability approach guarantees transparency, quality, and authenticity for you and your family. Go Halal is committed to unparalleled experiences, nutritious food choices, and upholding the belief in charity for the greater good. "
                )}
              </span>
            )}
            <div className="ContactInfo">
              <div className="RowText">
                <img src={Phone} alt="" />
                <div>
                  <span>
                    {getTranslation("Hotline (Mo. -Sa. 8 -20 Hrs.) ")}
                  </span>
                  <span style={{ whiteSpace: "nowrap" }}>
                    {getTranslation("+49 - 8161 - 5193561")}
                  </span>
                </div>
              </div>
              <div>
                <img src={Address} alt="" />
                <span>
                  {getTranslation(
                    "Ganzenmüllerstraße 27 85354 Freising Germany"
                  )}
                </span>
              </div>
              <div>
                <img src={Mail} alt="" />
                <span>support@gohalalshop.com</span>
              </div>
            </div>
          </div>
        )}
        <div
          className="ListDivsContainer"
          style={
            windowWidth <= 650
              ? { flexDirection: "column" }
              : { flexDirection: "row" }
          }
        >
          {tabs.map((elem, index) => {
            return (
              <BottomMenuListMenu
                dropDownActive={windowWidth <= 650}
                data={elem}
                languageButton={elem.header === "GoHalal Business"}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BottomMenu;

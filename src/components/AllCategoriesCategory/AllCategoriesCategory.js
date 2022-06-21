import React from "react";
import "./AllCategoriesCategory.css";
import { getTranslation } from "../../Utils/getLanguage";

function AllCategoriesCategory({ icon, text, colorChangeOnHover, isMobile }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => console.log(text)}
      className="AllCategoriesCategory"
      id="AllCategoriesCategory"
      style={
        isMobile
          ? { border: "1px rgb(224, 224, 224) solid", borderRadius: "10px" }
          : hover
          ? { backgroundColor: "rgb(224, 224, 224)" }
          : {}
      }
    >
      <div
        style={
          hover && !isMobile
            ? { transform: "scale(1.1)" }
            : { transform: "scale(1)" }
        }
      >
        <img
          style={
            hover && colorChangeOnHover
              ? {
                  filter:
                    "brightness(0) saturate(100%) invert(20%) sepia(68%) saturate(2052%) hue-rotate(83deg) brightness(97%) contrast(94%)",
                }
              : {}
          }
          src={icon}
          alt=""
        />
        <span style={hover ? { color: "#115C07" } : {}}>
          {getTranslation(text)}
        </span>
      </div>
    </div>
  );
}

export default AllCategoriesCategory;

import React from "react";
import "./MenuObject.css";
import VerticalLine from "../../icons/Line 164Line.svg";
import { getTranslation } from "../../Utils/getLanguage";
import DropDownList from "../DropDownList/DropDownList";
import { Link } from "react-router-dom";

function MenuObject({
  icon,
  text,
  isVerticalLine,
  dropDownList,
  id,
  route,
  clickable = true,
  showDropDownList,
  shortVersion,
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className="MenuObject"
      onMouseEnter={() => {
        setHover(true);

        if (clickable && !shortVersion) {
          const img = document.getElementById("icon" + id);
          const text = document.getElementById("text" + id);
          const menu = document.getElementById("menuObjectContainer" + id);
          img.style.filter =
            "brightness(0) saturate(100%) invert(80%) sepia(4%) saturate(42%) hue-rotate(320deg) brightness(91%) contrast(82%)";
          text.style.color = "grey";
          menu.style.cursor = "pointer";
        }
      }}
      onMouseLeave={() => {
        setHover(false);
        const img = document.getElementById("icon" + id);
        const text = document.getElementById("text" + id);
        img.style.filter = "";
        text.style.color = "white";
      }}
    >
      <Link to={`/${route}`} style={{ textDecoration: "none" }}>
        <div
          onClick={() => console.log(text)}
          className="MenuObjectContainer"
          id={"menuObjectContainer" + id}
        >
          <div
            className={shortVersion ? "ShortVersion" : ""}
            style={
              shortVersion
                ? { flexDirection: "row-reverse" }
                : { flexDirection: "row" }
            }
          >
            <img
              id={"icon" + id}
              style={
                shortVersion
                  ? {
                      paddingLeft: "min(4vw, 10px)",
                    }
                  : {
                      paddingLeft: "min(4vw, 10px)",
                      paddingRight: "min(4vw, 10px)",
                    }
              }
              src={icon}
              alt=""
            />
            <span
              className={shortVersion ? "ShortVersionSpan" : ""}
              style={
                isVerticalLine
                  ? { paddingRight: "10px" }
                  : { paddingRight: "0" }
              }
              id={"text" + id}
            >
              {getTranslation(text)}
            </span>
          </div>
          {isVerticalLine && <img src={VerticalLine} alt="" />}
        </div>
      </Link>
      {dropDownList && showDropDownList && (
        <DropDownList translateDown="20px" show={hover} list={dropDownList} />
      )}
    </div>
  );
}

export default MenuObject;

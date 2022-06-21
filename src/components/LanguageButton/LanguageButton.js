import React from "react";
import { getTranslation } from "../../Utils/getLanguage";
import "./LanguageButton.css";
import arrowDown from "../../icons/down-arrow.png";
import arrowUp from "../../icons/up-arrow.png";
import LanguageIcon from "../../icons/Language.svg";
import VerticalLine from "../../icons/Line 164Line.svg";

function LanguageButton({
  color,
  border,
  borderTop = false,
  background,
  colorIcon,
  setPadding,
  isVerticalLine = false,
  translateY,
}) {
  const [dropDownShow, setDropDownShow] = React.useState(false);
  const [language, setLanguage] = React.useState("English");
  const languageArray = ["English", "German", "Polish", "Spanish"];

  return (
    <div
      className="LanguageDropDown"
      style={background ? { backgroundColor: background } : {}}
    >
      <div
        className="LanguageDropDownHeader"
        style={
          border
            ? { border: "1px black solid", padding: setPadding, color }
            : { padding: setPadding, color }
        }
        onClick={() => {
          console.log("click");
          setDropDownShow(!dropDownShow);
        }}
      >
        <img
          style={colorIcon ? { filter: colorIcon } : {}}
          src={LanguageIcon}
          alt=""
        />
        <span id="LanguagePickElem">English</span>
        <img
          style={colorIcon ? { filter: colorIcon } : {}}
          src={dropDownShow ? arrowUp : arrowDown}
          alt=""
        />
        {isVerticalLine && (
          <img
            style={
              colorIcon
                ? { filter: colorIcon, height: "1em", padding: "0 0.2em" }
                : { height: "1em", padding: "0.2em" }
            }
            src={VerticalLine}
            alt=""
          />
        )}
      </div>
      {dropDownShow && (
        <div
          className="LanguageDropDownOptions"
          style={
            borderTop
              ? {
                  border: "1px black solid",
                  borderTop: "none",
                  transform: `translateY(${translateY})`,
                }
              : {
                  border: "1px grey solid",
                  transform: `translateY(${translateY})`,
                }
          }
        >
          {languageArray.map((elem, index) => {
            return (
              <span
                onClick={() => {
                  document.getElementById("LanguagePickElem").textContent =
                    elem;

                  setDropDownShow(false);
                  setLanguage(elem);
                }}
                key={index}
              >
                {getTranslation(elem)}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LanguageButton;

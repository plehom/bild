import React from "react";
import { getTranslation } from "../../Utils/getLanguage";
import "./BottomMenuListMenu.css";
import arrowUp from "../../icons/up-arrow-svgrepo-com.svg";
import arrowDown from "../../icons/down-arrow-svgrepo-com.svg";
import LanguageButton from "../LanguageButton/LanguageButton";

function BottomMenuListMenu({ data, dropDownActive, languageButton }) {
  const [showDropDown, setShowDropDown] = React.useState(false);

  React.useEffect(() => {
    if (!dropDownActive) setShowDropDown(true);
    else setShowDropDown(false);
  }, [dropDownActive]);

  return (
    <>
      <div className="BottomMenuListMenu">
        <div
          className="HeaderContainer"
          style={dropDownActive ? { cursor: "pointer" } : {}}
          onClick={() => {
            if (dropDownActive) setShowDropDown(!showDropDown);
          }}
        >
          <span className="big-text text-dark-green text-bold">
            {getTranslation(data.header)}
          </span>
          {dropDownActive && (
            <img src={showDropDown ? arrowUp : arrowDown} alt="" />
          )}
        </div>
        {dropDownActive && <div className="Underline" />}

        {showDropDown && (
          <div
            className="DropDownMenuBottomMenu"
            style={languageButton ? { marginBottom: "2em" } : {}}
          >
            {data.list.map((elem, index) => {
              return (
                <span
                  key={index}
                  className="text"
                  onClick={() => console.log(elem)}
                >
                  {getTranslation(elem)}
                </span>
              );
            })}
          </div>
        )}
        {languageButton && !dropDownActive && (
          <LanguageButton
            setPadding="0.5em 0"
            translateY="2.4em"
            border={true}
          />
        )}
      </div>
    </>
  );
}

export default BottomMenuListMenu;

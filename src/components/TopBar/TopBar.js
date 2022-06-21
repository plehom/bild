import React from "react";
import "./TopBar.css";
import FreeShippingIcon from "../../icons/delivery-bus.png";
import Menu from "../../icons/icons8-menu.svg";
import TopBarList from "../../Utils/ToBarList";
import MenuObject from "../MenuObject/MenuObject";
import LanguageButton from "../LanguageButton/LanguageButton";

function TopBar(props) {
  const [shortVersion, setShortVersion] = React.useState(
    window.innerWidth <= 1200
  );
  const [menuDropDown, setMenuDropDown] = React.useState(false);

  window.addEventListener("click", (event) => {
    if (
      event.target.className !== "ShortVersion" &&
      event.target.className !== "ShortVersionSpan" &&
      event.target.className !== "TopBarContainer2" &&
      event.target.className !== "TopBarDropDownMenu" &&
      event.target.className !== ""
    ) {
      setMenuDropDown(false);
    }
  });

  window.addEventListener("resize", () => {
    var width = window.innerWidth;
    if (width <= 1200) {
      setShortVersion(true);
    } else {
      setShortVersion(false);
      setMenuDropDown(false);
    }
  });

  return (
    <div
      style={
        shortVersion
          ? {
              position: "fixed",
              zIndex: "100",
              width: "100%",
            }
          : {}
      }
    >
      <div className="TopBarContainer">
        <div id="TopBarContainer2" className="TopBarContainer2">
          <div className="TopBarLeftSide">
            <MenuObject
              text="Free shipping from 45€"
              icon={FreeShippingIcon}
              isVerticalLine={false}
              clickable={false}
            />
          </div>
          <div id="TopBarRightSide" className="TopBarRightSide">
            {TopBarList().map((elem, index) => {
              if (elem.text === "Language") {
                return (
                  <>
                    {!shortVersion && (
                      <LanguageButton
                        background="transparent"
                        color="white"
                        setPadding="0em"
                        translateY="1.9em"
                        colorIcon="var(--white-filter)"
                        key={index}
                      />
                    )}
                  </>
                );
              }
              return (
                <div key={index}>
                  {!shortVersion && (
                    <MenuObject
                      key={index}
                      id={index}
                      icon={elem.icon}
                      text={elem.text}
                      route={elem.route}
                      isVerticalLine={index !== TopBarList().length - 1}
                      dropDownList={elem.dropDownList}
                      showDropDownList={!menuDropDown}
                      shortVersion={shortVersion}
                    />
                  )}
                </div>
              );
            })}

            {shortVersion && (
              <img
                id="dropDownMenuIcon"
                onClick={() => setMenuDropDown(!menuDropDown)}
                src={Menu}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      {menuDropDown && (
        <div className="TopBarDropDownMenu">
          {TopBarList().map((elem, index) => {
            return (
              <div key={index}>
                <MenuObject
                  id={index}
                  icon={elem.icon}
                  text={elem.text}
                  route={elem.route}
                  isVerticalLine={false}
                  dropDownList={elem.dropDownList}
                  shortVersion={shortVersion}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TopBar;

import React from "react";
import "./TopBarMobile.css";
import SearchBar from "../SearchBar/SearchBar";
import MenuIcon from "../../icons/icons8-menu.svg";
import GoHalalIcon from "../../icons/Group 5136.svg";
import AccountIcon from "../../icons/Account.svg";
import MyCartIcon from "../../icons/MyCart.svg";
import MenuObject from "../MenuObject/MenuObject";
import TopBarList from "../../Utils/ToBarList";

function TopBarMobile(props) {
  const [sideMenu, setSideMenu] = React.useState(false);

  return (
    <div className="TopBarMobile" id="TopBarMobile">
      <div className="TopMenuMobile">
        <div className="TopMenuMobileIcons">
          <img
            className="icon"
            onClick={() => setSideMenu(!sideMenu)}
            src={MenuIcon}
            alt=""
          />
          <img
            className="logo"
            onClick={() => (window.location.href = "/")}
            src={GoHalalIcon}
            alt=""
          />
          <div>
            <img className="icon" src={AccountIcon} alt="" />
            <img className="icon" src={MyCartIcon} alt="" />
          </div>
        </div>

        <div id="TopBarSearchBar" className="TopMenuMobileSearchBar">
          <SearchBar
            buttonLeft={true}
            size="clamp(20px, 10vw, 45px)"
            placeholder="I'm searching for"
            isCategories={false}
            buttonTransparent={true}
          />
        </div>
      </div>
      {sideMenu && (
        <div className="SideMenuContainer">
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
                  showDropDownList={false}
                  shortVersion={true}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TopBarMobile;

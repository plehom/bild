import React from "react";
import "./ButtonWithDropDown.css";
import DropDownList from "../DropDownList/DropDownList";

function ButtonWithDropDown({ elem }) {
  const [showDropDown, setShowDropDown] = React.useState(false);
  return (
    <div
      className="ButtonWithDropDown"
      onMouseEnter={() => {
        setShowDropDown(true);
      }}
      onMouseLeave={() => {
        setShowDropDown(false);
      }}
      onClick={() => console.log(elem.text)}
    >
      <img
        style={showDropDown ? { filter: "var(--dark-green-filter)" } : {}}
        src={elem.icon}
        alt=""
      ></img>
      <span style={showDropDown ? { color: "var(--dark-green)" } : {}}>
        {elem.text}
      </span>
      {elem.text === "My Cart" && (
        <span style={{ color: "white" }} className="cartNumber">
          2
        </span>
      )}
      <DropDownList
        id="DropDownList"
        translateDown="min(7vw, 35px)"
        show={showDropDown}
        list={elem.dropDowns}
      />
    </div>
  );
}

export default ButtonWithDropDown;

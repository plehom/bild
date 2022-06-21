import React from "react";
import "./DiscountButton.css";

function DiscountButton({ elem, paddingLeft, paddingRight }) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      className="DiscountButton"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ paddingLeft, paddingRight }}
      onClick={() => console.log(elem.text)}
    >
      <img
        style={
          hover
            ? {
                filter: "var(--dark-green-filter)",
              }
            : {}
        }
        src={elem.icon}
        alt=""
      />

      <div>
        <span style={hover ? { color: "#115c07" } : { color: "black" }}>
          {elem.text}
        </span>
        <div
          style={
            hover
              ? { backgroundColor: "var(--dark-green)" }
              : { backgroundColor: "transparent" }
          }
        />
      </div>
    </div>
  );
}

export default DiscountButton;

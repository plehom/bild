import React from "react";
import "./DropDownListElement.css";
import rightArrow from "../../icons/rightArrow.svg";
import { Link } from "react-router-dom";

function DropDownListElement({ elem }) {
  const [hoverElement, setHoverElement] = React.useState(false);

  return (
    <Link to={`/${elem.route}`} style={{ textDecoration: "none" }}>
      <div
        className="DropDownListElement"
        onMouseEnter={() => {
          setHoverElement(true);
        }}
        onMouseLeave={() => {
          setHoverElement(false);
        }}
        // onClick={() => (window.location.href += elem.route)}
      >
        <div>
          <div>
            {elem.icon && (
              <img
                style={
                  hoverElement ? { filter: "var(--dark-green-filter)" } : {}
                }
                src={elem.icon}
                alt=""
              />
            )}
            <span style={hoverElement ? { color: "var(--dark-green)" } : {}}>
              {elem.text}
            </span>
          </div>
          <img
            style={hoverElement ? { filter: "var(--dark-green-filter)" } : {}}
            id="rightArrow"
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
}

export default DropDownListElement;

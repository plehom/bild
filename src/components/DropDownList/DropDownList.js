import React from "react";
import DropDownListElement from "../DropDownListElement/DropDownListElement";
import "./DropDownList.css";

function DropDownList({ list, show, translateDown }) {
  const [hover, setHover] = React.useState(show);
  const [hoverElement, setHoverElement] = React.useState(false);
  React.useEffect(() => {
    setHover(show);
  }, [show]);

  const style = {
    transform: `translateY(calc(50% + ${translateDown}))`,
  };

  return (
    <div className="DropDownList" style={style}>
      {hover && list && (
        <div
          className="DropDownListContainer"
          id="DropDownListContainer"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(show);
          }}
        >
          {list.map((elem, index) => {
            return <DropDownListElement elem={elem} key={index} />;
          })}
        </div>
      )}
    </div>
  );
}

export default DropDownList;

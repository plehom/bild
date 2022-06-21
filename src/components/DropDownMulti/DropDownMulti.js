import React from "react";
import "./DropDownMulti.css";

function DropDownMulti({ elem, divider, optionChange, selectedOptions }) {
  function InArray(element, array) {
    var isit = false;
    array.forEach((elem) => {
      if (elem === element) {
        isit = true;
      }
    });

    return isit;
  }

  React.useEffect(() => {
    setSelected(InArray(elem.text, selectedOptions));
  }, [selectedOptions]);

  const [selected, setSelected] = React.useState(
    InArray(elem.text, selectedOptions)
  );

  //   React.useEffect(() => {
  //     if (selected) isSelected(elem.text);
  //     if (!selected) isNotSelected(elem.text);
  //   }, [selected]);

  return (
    <div
      onClick={() => {
        setSelected(!selected);
        optionChange(elem.text);
      }}
      className="DropDownMulti"
      id="DropDownMulti"
    >
      <div>
        <div>
          <img src={elem.img} alt="" />
          <span>{elem.text}</span>
        </div>
        <div
          className="SmallCheckbox"
          style={
            selected
              ? { backgroundColor: "var(--dark-green)" }
              : { backgroundColor: "transparent" }
          }
        />
      </div>
      {divider && (
        <div style={{ pointerEvents: "none" }} className="divider100"></div>
      )}
    </div>
  );
}

export default DropDownMulti;

import React from "react";
import DropDownInputList from "../DropDownInputList/DropDownInputList";
import "./DropDownInput.css";

function DropDownInput({ placeholder }) {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [showCities, setShowCities] = React.useState(false);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  //   window.addEventListener("click", (ev) => {
  //   });

  window.addEventListener("click", (event) => {
    if (
      event.target.className !== "DropDownInput" &&
      event.target.className !== "DropDownInputList" &&
      event.target.className !== "DropDownInput" &&
      event.target.className !== "DropDownInputListHeader" &&
      event.target.className !== ""
    ) {
      setShowCities(false);
    }
  });

  const CityNameSet = (city_name) => {
    document.getElementById("DropDownInput").value = city_name;
    setShowCities(false);
  };

  const data = [
    {
      country: "Germany",
      cities: ["Berlin", "Hokenhaim", "Monachium", "Brema"],
    },
    {
      country: "Poland",
      cities: ["Warszawa", "Szczecin", "Gdańsk", "Wrocław", "Kraków"],
    },
  ];
  return (
    <div
      style={
        windowWidth <= 850
          ? { marginLeft: "0", marginTop: "20px", maxWidth: "400px" }
          : { marginLeft: "20px", marginTop: "0", maxWidth: "1000px" }
      }
      className="DropDownInput"
    >
      <input
        onFocus={() => setShowCities(true)}
        placeholder={placeholder}
        autoComplete="nope"
        id="DropDownInput"
      />
      {showCities && (
        <div className="DropDownInputListContainer">
          {data.map((elem, index) => {
            return (
              <DropDownInputList
                CityNameSet={CityNameSet}
                data={elem}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDownInput;

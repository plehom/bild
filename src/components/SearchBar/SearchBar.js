import React from "react";
import DropDownClickList from "../DropDownClickList/DropDownClickLIst";
import "./SearchBar.css";
import searchButton from "../../icons/GroupsearchButton.svg";

function SearchBar({
  isCategories = true,
  placeholder,
  button = "",
  size,
  buttonLeft = false,
  buttonTransparent = false,
  showButton = true,
  padding = "0.5em",
}) {
  const Categories = ["All Categories", "Meat", "Vegies", "Fruits", "Milk"];
  return (
    <div className="SearchBar" style={{ height: size }}>
      <form
        action="/"
        method="get"
        style={
          buttonLeft
            ? { flexDirection: "row-reverse" }
            : { flexDirection: "row" }
        }
      >
        <input
          style={{ padding: `0 ${padding} 0 ${padding}` }}
          type="text"
          id="header-search"
          placeholder={placeholder}
        />
        <div>
          {isCategories && (
            <>
              <DropDownClickList
                placeholder="All Categories"
                categories={Categories}
                marginBottom="70px"
              />
            </>
          )}
          {showButton && (
            <button
              style={
                !button
                  ? buttonTransparent
                    ? { width: size, backgroundColor: "transparent" }
                    : { width: size, backgroundColor: "#a5cc25" }
                  : {}
              }
            >
              {button && (
                <span style={{ padding: "0.5em 0.5em" }}>{button}</span>
              )}

              {!button && (
                <img
                  style={
                    buttonTransparent
                      ? {
                          width: "min(4vw, 25px)",
                          filter: "var(--dark-filter)",
                        }
                      : {}
                  }
                  src={searchButton}
                  alt=""
                />
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

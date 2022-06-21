import React from "react";
import "./AllCategories.css";

import AllCategoriesCategory from "../AllCategoriesCategory/AllCategoriesCategory";
import { getTranslation } from "../../Utils/getLanguage";
import Close from "../../icons/icons8-close.svg";
import Banner from "../../icons/Group 5348.svg";

function AllCategories({
  tabs,
  scrollEnabaled = true,
  onClose,
  isMobile = false,
}) {
  const [windowWidth, setWindowWitdth] = React.useState(window.innerWidth);
  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));
  const [windowWidth1500, setWindowWitdth1500] = React.useState(1500);

  React.useEffect(() => {
    if (windowWidth <= 1500) setWindowWitdth1500(windowWidth * 0.9);
  }, [windowWidth]);

  function Dot({ isSelected = false }) {
    const [selected, setSelected] = React.useState(isSelected);
    return (
      <div
        style={
          selected
            ? {
                width: "min(2vw, 0.6em)",
                height: "min(2vw, 0.6em)",
                borderRadius: "50%",
                background: "var(--dark-green)",
                margin: "0 0.2em",
                cursor: "pointer",
              }
            : {
                width: "min(2vw, 0.6em)",
                height: "min(2vw, 0.6em)",
                borderRadius: "50%",
                background: "grey",
                margin: "0 0.2em",
                cursor: "pointer",
              }
        }
        onClick={() => setSelected(!selected)}
      ></div>
    );
  }

  return (
    <div
      className="AllCategories"
      style={
        scrollEnabaled
          ? {
              maxHeight: "none",
              overflowY: "hidden",
            }
          : {}
      }
    >
      <div style={isMobile ? { backgroundColor: "transparent" } : {}}>
        <div
          className="TopPartAllCategories"
          style={
            isMobile
              ? {
                  padding: "1em 0",
                }
              : { paddingBottom: "1em" }
          }
        >
          <span>{getTranslation("All Categories")}</span>
          <div
            onClick={() => onClose()}
            style={{ display: "flex", alignItems: "center" }}
          >
            <span>{getTranslation("Colse")}</span>
            <img
              style={{
                filter: "var(--dark-filter)",
                height: "1.2em",
                paddingLeft: "0.5em",
              }}
              src={Close}
              alt=""
            />
          </div>
        </div>
        {isMobile && (
          <>
            <img
              style={{ width: "100%", marginBottom: "0.5em" }}
              src={Banner}
              alt=""
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1em",
              }}
            >
              <Dot isSelected={true} />
              <Dot />
              <Dot />
              <Dot />
              <Dot />
            </div>
          </>
        )}

        <div
          className="AllCategoriesConatiner"
          style={
            isMobile
              ? {
                  // gridTemplateColumns: `repeat(min(${Math.floor(
                  //   windowWidth1500 / 100
                  // )}, 6), minmax(100px, 1fr))`,
                  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                  gap: "1em",
                }
              : {
                  gridTemplateColumns: `repeat(min(${Math.floor(
                    windowWidth1500 / 100
                  )}, 6), minmax(100px, 1fr))`,
                }
          }
        >
          {tabs.map((elem, index) => {
            return (
              <AllCategoriesCategory
                icon={elem.icon}
                text={elem.text}
                isMobile={isMobile}
                colorChangeOnHover={elem.colorChangeOnHover}
                key={index}
              />
            );
          })}
          <div
            style={{
              width: "1000%",
              backgroundColor: "white",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AllCategories;

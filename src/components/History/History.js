import React from "react";
import { getTranslation } from "../../Utils/getLanguage";
import "./History.css";

function History({ tabs }) {
  const [windowWidth, setWindowWitdth] = React.useState(window.innerWidth);
  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));
  const [windowWidth1500, setWindowWitdth1500] = React.useState(1500);

  React.useEffect(() => {
    if (windowWidth <= 1500) setWindowWitdth1500(windowWidth * 0.9);
  }, [windowWidth]);

  const [selectedDot, setSelectedDot] = React.useState(0);

  return (
    <div className="History">
      <div className="HistoryContent">
        <div className="PointersContainer">
          {tabs.map((elem, index) => {
            return (
              <div
                className="Pointer"
                style={selectedDot === index ? { visibility: "visible" } : {}}
                key={index}
              ></div>
            );
          })}
        </div>
        {tabs.map((elem, index) => {
          return (
            <div
              className="HistoryText"
              key={index}
              style={selectedDot === index ? { display: "flex" } : {}}
            >
              <img src={elem.photo} alt="" />
              <div>
                <span className="text text-bold text-dark-green margin-bottom-0-5">
                  {elem.date}
                </span>

                <span className="text text-bold">
                  {getTranslation(elem.text)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="TimeLine">
        {tabs.map((elem, index) => {
          return (
            <div
              className="Dot"
              key={index}
              onClick={() => {
                setSelectedDot(index);
              }}
              style={
                selectedDot === index
                  ? {
                      borderColor: "var(--dark-green)",
                      transform: "scale(1.1)",
                    }
                  : {}
              }
              //   style={{
              //     marginLeft: `calc(18px + 1.5em * 0.62 + ${
              //       ((windowWidth1500 - 36) / tabs.length) * index
              //     }px )`,
              //   }}
            >
              <span className="small-text">{elem.year}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default History;

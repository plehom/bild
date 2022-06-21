import React from "react";
import "./CertifiedHalal.css";
import CertifiedHalalIcon from "../../icons/Group 3206certifiedHalal.svg";
import { getTranslation } from "../../Utils/getLanguage";

function CertifiedHalal(props) {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth <= 960) {
      document.getElementById("CertifiedHalalContainer").style.flexDirection =
        "column";
      document.getElementById("CertifiedHalalIcon").style.width = "70%";

      document.getElementById("CertifiedHalalIcon").style.marginTop = "15%";
      document.getElementById("CertifiedHalalContainer").style.textAlign =
        "center";
    } else {
      document.getElementById("CertifiedHalalContainer").style.flexDirection =
        "row";
      document.getElementById("CertifiedHalalIcon").style.width = "100%";

      document.getElementById("CertifiedHalalIcon").style.marginTop = "0px";
      document.getElementById("CertifiedHalalContainer").style.textAlign =
        "left";
    }
  });

  React.useEffect(() => {
    if (window.innerWidth <= 960) {
      document.getElementById("CertifiedHalalContainer").style.flexDirection =
        "column";

      document.getElementById("CertifiedHalalIcon").style.marginTop = "15%";
      document.getElementById("CertifiedHalalIcon").style.width = "70%";
      document.getElementById("CertifiedHalalContainer").style.textAlign =
        "center";
    } else {
      document.getElementById("CertifiedHalalContainer").style.flexDirection =
        "row";
      document.getElementById("CertifiedHalalIcon").style.marginTop = "0px";
      document.getElementById("CertifiedHalalContainer").style.textAlign =
        "left";
      document.getElementById("CertifiedHalalIcon").style.width = "100%";
    }
  }, []);

  return (
    <div className="CertifiedHalal">
      <div id="CertifiedHalalContainer" className="CertifiedHalalContainer">
        <div>
          <span id="textAlignCenter" className="greenBigText">
            {getTranslation("100% Certified Authentic Halal")}
          </span>
          <span id="textAlignCenter" className="whiteBigText">
            {getTranslation("Always honest, nutritious & Tasty")}
          </span>
          <div
            style={
              windowWidth <= 960
                ? { flexDirection: "column" }
                : { flexDirection: "row" }
            }
            id="textAlignCenter"
          >
            <span className="smallText">
              {getTranslation("Enjoy the Taste - ")}
            </span>
            <span
              className="whiteBackgroundText"
              style={
                windowWidth <= 960
                  ? { marginTop: "5px", marginLeft: "0" }
                  : { marginTop: "0", marginLeft: "5px" }
              }
            >
              {getTranslation("Today, Tommorow and Everyday")}
            </span>
          </div>
        </div>
        <img id="CertifiedHalalIcon" src={CertifiedHalalIcon} alt="" />
      </div>
    </div>
  );
}

export default CertifiedHalal;

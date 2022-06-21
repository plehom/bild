import React from "react";
import "./WhyGoHalal.css";
import WhyGoHalalIcon from "../../icons/WHY GO HALALwhyGoHalal.svg";
import { getTranslation } from "./../../Utils/getLanguage";
import { Link } from "react-router-dom";

function WhyGoHalal(props) {
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1250) {
      document.getElementById("WhyGoHalal").style.flexDirection = "column";
      document.getElementById("WhyGoHalalText").style.textAlign = "center";
      // document.getElementById("WhyGoHalalRightSide").style.width = "90%";
      // document.getElementById("WhyGoHalalLeftSide").style.width = "90%";
      document.getElementById("WhyGoHalalLeftSide").style.marginBottom = "30px";
    } else {
      document.getElementById("WhyGoHalal").style.flexDirection = "row";
      document.getElementById("WhyGoHalalText").style.textAlign = "left";
      // document.getElementById("WhyGoHalalRightSide").style.width = "40%";
      // document.getElementById("WhyGoHalalLeftSide").style.width = "40%";
      document.getElementById("WhyGoHalalLeftSide").style.marginBottom = "0px";
    }
  });

  React.useEffect(() => {
    if (window.innerWidth <= 1250) {
      document.getElementById("WhyGoHalal").style.flexDirection = "column";
      document.getElementById("WhyGoHalalText").style.textAlign = "center";
      // document.getElementById("WhyGoHalalRightSide").style.width = "90%";
      // document.getElementById("WhyGoHalalLeftSide").style.width = "90%";
      document.getElementById("WhyGoHalalLeftSide").style.marginBottom = "30px";
    } else {
      document.getElementById("WhyGoHalal").style.flexDirection = "row";
      document.getElementById("WhyGoHalalText").style.textAlign = "left";
      // document.getElementById("WhyGoHalalRightSide").style.width = "40%";
      // document.getElementById("WhyGoHalalLeftSide").style.width = "40%";
      document.getElementById("WhyGoHalalLeftSide").style.marginBottom = "0px";
    }
  }, []);

  return (
    <div className="WhyGoHalalContainer">
      <div id="WhyGoHalal" className="WhyGoHalal">
        <div id="WhyGoHalalLeftSide" className="WhyGoHalalLeftSide">
          <img src={WhyGoHalalIcon} alt="" />
          <Link to={"aboutus?section=ourstory"}>
            <button className="WhyGoHalalButton">Our Story</button>
          </Link>
        </div>
        <div id="WhyGoHalalRightSide" className="WhyGoHalalRightSide">
          <div id="WhyGoHalalText" className="WhyGoHalalText">
            <span className="blackText">
              {getTranslation(
                "At Go Halal, we believe in doing things the right way. Our decisions are guided by "
              )}
            </span>
            <span className="greenText">
              {getTranslation("100% authentic halal ")}
            </span>
            <span className="blackText">
              {getTranslation(
                "for a fresh, delicious, nutritious, hygienic, and unparalleled customer experience. Everything we offer at Go Halal – from the freshest of flavors to donating a portion of our proceeds to the poor – is packed with the halal spirit in mind, resulting in "
              )}
            </span>
            <span className="greenText">
              {getTranslation("healthy food, a happy planet")}
            </span>
            <span className="blackText">{getTranslation(", and ")}</span>
            <span className="greenText">
              {getTranslation("the healthiest, happiest you.")}
            </span>
          </div>
          <span id="WhyGoHalalBottomText" className="WhyGoHalalBottomText">
            {getTranslation(
              "We are Go Halal - The 100% Halal food company made for you."
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WhyGoHalal;

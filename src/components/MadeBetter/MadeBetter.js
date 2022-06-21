import React from "react";
import "./MadeBetter.css";
import MadeBetterPhoto from "../../icons/Package 1MadeBetter.svg";
import MadeBetterText from "../../icons/The Halal You Love and Trust Made Better. Better for the WorldMadeBetterText.svg";

function MadeBetter(props) {
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1050) {
      document.getElementById("MadeBetterContainer").style.flexDirection =
        "column";
      document.getElementById("MadeBetter").style.paddingTop = "40px";
      document.getElementById("MadeBetter").style.paddingBottom = "0px";
    } else {
      document.getElementById("MadeBetterContainer").style.flexDirection =
        "row";
      document.getElementById("MadeBetter").style.paddingTop = "40px";
      document.getElementById("MadeBetter").style.paddingBottom = "40px";
    }
  });

  React.useEffect(() => {
    if (window.innerWidth <= 1050) {
      document.getElementById("MadeBetterContainer").style.flexDirection =
        "column";
      document.getElementById("MadeBetter").style.paddingTop = "40px";
      document.getElementById("MadeBetter").style.paddingBottom = "0px";
    } else {
      document.getElementById("MadeBetterContainer").style.flexDirection =
        "row";
      document.getElementById("MadeBetter").style.paddingTop = "40px";
      document.getElementById("MadeBetter").style.paddingBottom = "40px";
    }
  });

  return (
    <div id="MadeBetter" className="MadeBetter">
      <div id="MadeBetterContainer" className="MadeBetterContainer">
        <img className="MadeBetterText" src={MadeBetterText} alt="" />
        <img className="MadeBetterPhoto" src={MadeBetterPhoto} alt="" />
      </div>
    </div>
  );
}

export default MadeBetter;

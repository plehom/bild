import React from "react";
import "./Founder.css";
import Linkedin from "../../icons/Linkedin.svg";
import Twitter from "../../icons/Twitter.svg";
import Mail from "../../icons/Vector (17).svg";
import { getTranslation } from "../../Utils/getLanguage";

function Founder({ elem }) {
  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);
  const [showBiograpy, setShowBiography] = React.useState(false);

  window.addEventListener("resize", () => {
    setWindowWitdth(window.innerWidth);
  });

  return (
    <div className="Founder">
      <div
        style={
          showBiograpy && windowWitdth < 700
            ? {
                marginBottom: "0",
                maxWidth: "400px",
                alignItems: "center",
              }
            : { marginBottom: "2em", maxWidth: "400px" }
        }
      >
        <img
          //   style={showBiograpy ? {} : { alignSelf: "center" }}
          onClick={() => setShowBiography(!showBiograpy)}
          id="FounderPhoto"
          src={elem.photo}
          alt=""
        />
        <div onClick={() => setShowBiography(!showBiograpy)}>
          <span className="FontUnderline">{getTranslation(elem.name)}</span>
          <span className="FontSmall">{getTranslation(elem.titles)}</span>
        </div>
        <span
          onClick={() => setShowBiography(!showBiograpy)}
          className="FontSmaller"
        >
          {getTranslation(elem.position)}
        </span>
        <div className="Socials">
          <img
            src={Linkedin}
            onClick={() => window.open(elem.linkedin)}
            alt=""
          />
          <img src={Twitter} onClick={() => window.open(elem.twitter)} alt="" />
          <img
            id="Mail"
            src={Mail}
            onClick={() => {
              navigator.clipboard.writeText(elem.mail);
            }}
            alt=""
          />
        </div>
      </div>
      {(showBiograpy || windowWitdth >= 700) && (
        <div className="Biography">
          <span className="Header">{getTranslation("Biography")}</span>
          {elem.biography.map((elem, index) => {
            return (
              <span className="Paragraph small-text" key={index}>
                {getTranslation(elem)}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Founder;

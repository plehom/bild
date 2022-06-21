import React from "react";
import { getTranslation } from "../../Utils/getLanguage";
import "./RegisterForUpdates.css";
import Mail from "../../icons/Vector (4).svg";
import Facebook from "../../icons/Vector (5).svg";
import Twitter from "../../icons/Vector (6).svg";
import Linkdin from "../../icons/Vector (7).svg";
import YouTube from "../../icons/Vector (8).svg";
import PopUpThankYou from "../PopUpThankYou/PopUpThankYou";

function RegisterForUpdates(props) {
  const [windowWidth, setWindowWidth] = React.useState(null);

  const [email, setEmail] = React.useState(null);
  const [buttonHover, setButtonHover] = React.useState(false);
  const [thankYouPopUpShow, setThankYouPopUpShow] = React.useState(false);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const handleSubmit = () => {
    const email = document.getElementById("RegisterEmail").value;
    console.log(email);
  };

  const handleClose = () => {
    setThankYouPopUpShow(!thankYouPopUpShow);
  };

  return (
    <div className="RegisterForUpdates">
      {thankYouPopUpShow && (
        <PopUpThankYou
          headerText="Thank you for subscribing the offers and update !"
          link="www.youtube.com"
          handleClose={handleClose}
        />
      )}
      <div
        className="RegisterForUpdatesContainer"
        style={
          windowWidth <= 1000
            ? {
                flexDirection: "column",
              }
            : {
                flexDirection: "row",
              }
        }
      >
        <div className="RegisterForUpdatesHeader">
          <img src={Mail} alt="" />
          <span>{getTranslation("Register for Updates")}</span>
        </div>
        <div className="InputContainer">
          <input
            id="RegisterEmail"
            onChange={(obj) => setEmail(obj.currentTarget.value)}
            placeholder="Your E-Mail Adress..."
          />
          {windowWidth >= 1000 && (
            <button
              disabled={!email}
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
              style={
                !email
                  ? { backgroundColor: "#556453", cursor: "auto" }
                  : buttonHover
                  ? { backgroundColor: "#0e3f07", cursor: "pointer" }
                  : { backgroundColor: "#115c07", cursor: "pointer" }
              }
              onClick={() => {
                handleSubmit();
                setThankYouPopUpShow(true);
              }}
            >
              {getTranslation("Register Now")}
            </button>
          )}
        </div>
        {windowWidth < 1000 && (
          <div className="InputContainer">
            <button
              disabled={!email}
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
              style={
                !email
                  ? { backgroundColor: "#556453", cursor: "auto" }
                  : buttonHover
                  ? { backgroundColor: "#0e3f07", cursor: "pointer" }
                  : { backgroundColor: "#115c07", cursor: "pointer" }
              }
              onClick={() => {
                handleSubmit();
                setThankYouPopUpShow(true);
              }}
            >
              {getTranslation("Register Now")}
            </button>
          </div>
        )}
        <div className="Icons">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Linkdin} alt="" />
          <img src={YouTube} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RegisterForUpdates;

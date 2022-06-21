import React from "react";
import "./HeyMunchen.css";
import Van from "../../icons/van.jpg";
import HeyMunchenText from "../../icons/Group 3212 (1).svg";
import HeyMunchenHeader from "../../icons/HEY MÜNCHEN.svg";
import { getTranslation } from "../../Utils/getLanguage";
import PopUpWelcomeGuest from "../PopUpWelcomeGuest/PopUpWelcomeGuest";
import PopUpThankYou from "../PopUpThankYou/PopUpThankYou";

function HeyMunchen(props) {
  const [showPopUp, setShowPopUp] = React.useState(false);
  const [showPopUpThankYou, setShowPopUpThankYou] = React.useState(false);

  return (
    <div className="HeyMunchen">
      <PopUpWelcomeGuest
        isShown={showPopUp}
        handleClose={() => setShowPopUp(false)}
        handleSuccess={(data) => {
          console.log(data);
          setShowPopUp(false);
          setShowPopUpThankYou(true);
        }}
      />
      <PopUpThankYou
        handleClose={() => setShowPopUpThankYou(false)}
        headerText="Thank you for interest  to pre order our products. You will be among the first to recieve our products. Will be back to you soon!"
        isShown={showPopUpThankYou}
        link="www.gohalal.com"
      />
      <div className="HeyMunchenContainer">
        <img id="HeyMunchenHeader" src={HeyMunchenHeader} alt="" />
        <img id="Van" src={Van} alt="" />
        <img id="HeyMunchenText" src={HeyMunchenText} alt="" />
        <span onClick={() => setShowPopUp(true)} style={{ cursor: "pointer" }}>
          {getTranslation(
            "We are staring in München, let us know where you'd like us to be!"
          )}
        </span>
      </div>
    </div>
  );
}

export default HeyMunchen;

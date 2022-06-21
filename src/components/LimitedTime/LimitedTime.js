import React from "react";
import "./LimitedTime.css";
import PopUpOrder from "../PopUpOrder/PopUpOrder";
import { getTranslation } from "../../Utils/getLanguage";
import img1 from "../../icons/women with vegetable 1 1.png";
import img2 from "../../icons/women with vegetable 2.png";
import img3 from "../../icons/Meat 01 1.png";
import img4 from "../../icons/Meat 02 1.png";
import img5 from "../../icons/Meat 03 1.png";
import img6 from "../../icons/Meat 04 1.png";
import img7 from "../../icons/Meat 05 1.png";
import PopUpThankYou from "../PopUpThankYou/PopUpThankYou";

function LimitedTime(props) {
  const [showPopUpOrder, setShowPopUpOrder] = React.useState(false);
  const [showThankYou, setShowThankYou] = React.useState(false);
  const span = React.useRef();
  const div = React.useRef();

  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));

  React.useEffect(() => {
    span.current.style.fontSize = `calc(${div.current.offsetHeight}px + 3em)`;
  });

  window.addEventListener("resize", () => {
    span.current.style.fontSize = `calc(${div.current.offsetHeight}px + 3em)`;
  });

  return (
    <div className="LimitedTime">
      {showPopUpOrder && (
        <PopUpOrder
          handleClose={() => setShowPopUpOrder(false)}
          handleSuccess={() => {
            setShowPopUpOrder(false);
            setShowThankYou(true);
          }}
        />
      )}
      {showThankYou && (
        <PopUpThankYou
          handleClose={() => setShowThankYou(false)}
          headerText="Thank you for interest  to pre order our products. You will be among the first to recieve our products. Will be back to you soon!"
          link="www.GoHalal.com"
        />
      )}

      <div className="LimitedTimeContainer">
        <div className="LeftSide">
          <span className="header text-white text-bold">
            {getTranslation("Limited Time Special Offer")}
          </span>
          <div>
            <span ref={span}>5</span>
            <div ref={div}>
              <span className="header text-white text-bold">%</span>
              <span className="header text-white text-bold">
                {getTranslation("DISCOUT")}
              </span>
              <span className="header text-white text-bold">
                {getTranslation("ON PRE ORDER")}
              </span>
            </div>
          </div>
          <button
            className="LimitedTimeButton"
            onClick={() => setShowPopUpOrder(true)}
          >
            Pre Order Now
          </button>
        </div>
        {/* <div className="RightSideContainer"> */}
        {windowWitdth >= 900 && (
          <div className="RightSide">
            <div>
              <img id="img1" src={img3} alt="" />
              <img id="img2" src={img4} alt="" />
              <img id="img3" src={img5} alt="" />
              <img id="img4" src={img6} alt="" />
              <img id="img5" src={img7} alt="" />
            </div>
            <div>
              <img id="img6" src={img1} alt="" />
              <img id="img7" src={img2} alt="" />
            </div>
          </div>
        )}
        {/* </div> */}
        {/* <img src={LimitedTimePhoto} alt="" /> */}
      </div>
    </div>
  );
}

export default LimitedTime;

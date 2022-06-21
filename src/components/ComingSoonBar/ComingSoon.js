import React from "react";
import "./ComingSoon.css";
import SearchBar from "../SearchBar/SearchBar";
import { getTranslation } from "../../Utils/getLanguage";
import CommingSoonIcon from "../../icons/svg (2).svg";
import PopUpThankYou from "../PopUpThankYou/PopUpThankYou";
import Circle1 from "../../icons/svg_2 (1).svg";
import Circle2 from "../../icons/svg_2 (2).svg";
import DeliveryMan from "../../icons/delivery-man-with-box.png";
import HalalCer from "../../icons/halal-we-trust.png"

function ComingSoon(props) {
  const [email, setEmail] = React.useState(null);
  const [buttonHover, setButtonHover] = React.useState(false);
  const [thankYouPopUpShow, setThankYouPopUpShow] = React.useState(false);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const emailRef = React.useRef();

  const handleSubmit = () => {
    const email = emailRef.current.value;
    console.log(email);
    setThankYouPopUpShow(true);
  };

  const handleClose = () => {
    setThankYouPopUpShow(!thankYouPopUpShow);
  };

  return (
    <>
    
    <div
      style={
         windowWidth <= 1500
           ? { justifyContent: "space-around" }
           : { justifyContent: "space-between" }
      }
      className="ComingSoon"
    >
      {thankYouPopUpShow && (
        <PopUpThankYou
          showAgreament={true}
          headerText="Thank you for subscribing the offers and update !"
          link="www.youtube.com"
          handleClose={handleClose}
        />
      )}
      <div
        style={
          windowWidth >= 1500
            ? {
                display: "grid",
                width: "95%",
                aspectRatio: "2038/794",
                marginTop: "0px",
                marginBottom: "0px",
              }
            : windowWidth < 500
            ? {
                backgroundImage: "none",
                display: "flex",
                minWidth: "0",
                width: "90%",
                marginTop: "2em",
              }
            : {
                backgroundImage: "none",
                display: "flex",
                minWidth: "0",
                width: "60%",
                marginTop: "30px",
                marginBottom: "30px",
              }
        }
        className="CommingSoonContainer"
      >
        {windowWidth <= 1500 && <img src={CommingSoonIcon} alt="" />}
        <div
          style={windowWidth <= 1500 ? { alignItems: "left", marginLeft:"100px" } : {}}
          className="ComingSoonContent"
        >
          <span
            style={windowWidth <= 1500 ? { textAlign: "left" } : {}}
            className="ComingSoonHeader"
          >
            Get Notified When <br></br>
            Go Halal Goes Live
          </span>
          {windowWidth >= 500 && (
            <span
              style={windowWidth <= 1500 ? { textAlign: "left" } : {}}
              className="ComingSoonText"
            >
              
                Enter your email to receive exclusive promotions, special offers, and updates on our <br></br> upcoming services. In the meantime, please take a moment to read our story and discover<br></br> the differences that make Go Halal better than other grocery stores.
              
            </span>
          )}
          <div className="SearchBarContainer2">
            <div>
              <input
                placeholder="Email adress"
                onChange={(obj) => {
                  setEmail(obj.currentTarget.value);
                }}
                ref={emailRef}
              ></input>
              {windowWidth >= 500 && (
                <button
                  disabled={!email}
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                  type="button"
                  style={
                    !email
                      ? { backgroundColor: "#556453", cursor: "auto" }
                      : buttonHover
                      ? {
                          backgroundColor: "var(--light-green-hover)",
                          cursor: "pointer",
                        }
                      : {
                          backgroundColor: "var(--light-green)",
                          cursor: "pointer",
                        }
                  }
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  {getTranslation("Subscribe now")}
                </button>
              )}
            </div>
            {windowWidth < 500 && (
              <>
                <button
                  disabled={!email}
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                  type="button"
                  style={
                    !email
                      ? { backgroundColor: "#556453", cursor: "auto" }
                      : buttonHover
                      ? {
                          backgroundColor: "var(--light-green-hover)",
                          cursor: "pointer",
                        }
                      : {
                          backgroundColor: "var(--light-green)",
                          cursor: "pointer",
                        }
                  }
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  {getTranslation("Subscribe Now")}
                </button>
              </>
            )}
          </div>
          {windowWidth < 500 && (
            <div className="MobilePicture">
              <img src={DeliveryMan} className="DeliveryMan" alt="a" />
              <img src={Circle1} className="Circle Circle1" alt="" />
              <img src={Circle2} className="Circle Circle2" alt="" />
            </div>
          )}
          
        </div>
      </div>
      {windowWidth > 500 && (
            <div className="deliveryManPng">
              <img src={DeliveryMan} id="delMan" alt="man"/>
            </div>
          )}
    </div>
    
    </>
  );
}

export default ComingSoon;

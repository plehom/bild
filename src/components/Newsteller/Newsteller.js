import React from "react";
import { getTranslation } from "../../Utils/getLanguage";
import "./Newsteller.css";
import ReCAPTCHA from "react-google-recaptcha";
import PopUpThankYou from "../PopUpThankYou/PopUpThankYou";
import DropDownInput from "../DropDownInput/DropDownInput";

function Newsletter(props) {
  const [checkBox, setCheckBox] = React.useState(false);
  const [recaptcha, setRecaptcha] = React.useState(false);

  const submitForm = () => {
    const data = {
      firstName,
      lastName,
      email,
      checkBox,
      recaptcha,
    };

    console.log(data);
  };

  const [windowWidth, setWindowWidth] = React.useState(null);

  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [email, setEmail] = React.useState(null);

  const [thankYouPopUpShow, setThankYouPopUpShow] = React.useState(false);

  const [buttonHover, setButtonHover] = React.useState(false);

  var buttonDisabled = firstName && lastName && email && checkBox && recaptcha;

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const handleClose = () => {
    setThankYouPopUpShow(!thankYouPopUpShow);
  };

  return (
    <div className="Newsletter">
      {thankYouPopUpShow && (
        <PopUpThankYou
          headerText="Thank you for subscribing the offers and update!"
          link="www.youtube.com"
          handleClose={handleClose}
        />
      )}
      <div
        className="NewsletterContainer"
        style={windowWidth <= 550 ? { width: "80%" } : { width: "90%" }}
      >
        <span className="NewsletterHeader">
          {getTranslation("Register for offers and updates")}
        </span>
        <div
          className="NewsLetterInputContainer"
          style={
            windowWidth <= 850
              ? { flexDirection: "column" }
              : { flexDirection: "row" }
          }
        >
          <input
            className="NewsLetterInput"
            placeholder={getTranslation("First Name")}
            onChange={(obj) => setFirstName(obj.currentTarget.value)}
            id="NewsLetterFirstName"
            style={
              windowWidth <= 850
                ? { marginLeft: "0", maxWidth: "400px" }
                : { marginLeft: "20px", maxWidth: "1000px" }
            }
          ></input>
          <input
            className="NewsLetterInput"
            placeholder={getTranslation("Last Name")}
            onChange={(obj) => setLastName(obj.currentTarget.value)}
            id="NewsLetterLastName"
            style={
              windowWidth <= 850
                ? { marginLeft: "0", marginTop: "20px", maxWidth: "400px" }
                : { marginLeft: "20px", marginTop: "0", maxWidth: "1000px" }
            }
          ></input>
          <input
            className="NewsLetterInput"
            placeholder={getTranslation("Email Adress")}
            id="NewsLetterEmail"
            onChange={(obj) => setEmail(obj.currentTarget.value)}
            style={
              windowWidth <= 850
                ? { marginLeft: "0", marginTop: "20px", maxWidth: "400px" }
                : { marginLeft: "20px", marginTop: "0", maxWidth: "1000px" }
            }
          ></input>
          <DropDownInput placeholder="Choose Your City" />
        </div>
        <div className="DataProtectionPolicyCheck">
          <div
            className="CheckBox"
            onClick={() => setCheckBox(!checkBox)}
            style={
              checkBox
                ? {
                    backgroundColor: "rgb(65, 65, 65)",
                  }
                : {
                    backgroundColor: "transparent",
                  }
            }
          />
          <div className="AgreamentTextContainer">
            <span className="AgreamentText">
              {getTranslation(
                "I agree to the processing of my personal data in accordance with the Go Halal "
              )}
            </span>
            <span className="link-text AgreamentText">
              {getTranslation("Data Protection Policy")}
            </span>
            <span className="AgreamentText">
              {getTranslation(". You can ")}
            </span>
            <span className="link-text AgreamentText">
              {getTranslation("unsubscribe")}
            </span>
            <span className="AgreamentText">
              {getTranslation(
                " anytime you wish to not recieve any information about products and promotions of Go Halal."
              )}
            </span>
          </div>
        </div>
        <ReCAPTCHA
          sitekey="6Ldz35geAAAAAEE1lrF2kwe3tIhP-JmH4C8XEE_M"
          onChange={(value) => {
            if (value.length > 0) {
              setRecaptcha(true);
            }
          }}
        />

        <button
          disabled={!buttonDisabled}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          style={
            !buttonDisabled
              ? { backgroundColor: "#556453", cursor: "auto" }
              : buttonHover
              ? { backgroundColor: "#0e3f07", cursor: "pointer" }
              : { backgroundColor: "#115c07", cursor: "pointer" }
          }
          onClick={() => {
            submitForm();
            setThankYouPopUpShow(true);
          }}
        >
          {getTranslation("Subscribe")}
        </button>
      </div>
    </div>
  );
}

export default Newsletter;

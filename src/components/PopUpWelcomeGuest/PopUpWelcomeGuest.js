import React from "react";
import { getTranslation } from "../../Utils/getLanguage";
import "./PopUpWelcomeGuest.css";
import GoHalalLogo from "../../icons/GroupLogo (2).svg";
import CloseIcon from "../../icons/icons8-close.svg";
import ZipCode from "../ZipCode/ZipCode";

function PopUpWelcomeGuest({ isShown = true, handleClose, handleSuccess }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [deliveryAddress, setDeliveyAdress] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [checkBox, setCheckBox] = React.useState(false);

  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));

  window.addEventListener("click", (event) => {
    if (event.target.className === "PopUpThankYouContainer") {
      handleClose();
    }
  });

  var dataToSend = {
    firstName,
    lastName,
    deliveryAddress,
    adress,
    state,
    city,
    zipCode,
    country,
    phone,
    email,
  };
  var disabled =
    firstName === "" ||
    lastName === "" ||
    deliveryAddress === "" ||
    city === "" ||
    country === "" ||
    zipCode.length !== 5 ||
    !checkBox;

  return (
    <div
      className="PopUpThankYouContainer2"
      style={isShown ? { display: "flex" } : { display: "none" }}
    >
      <div
        className="PopUpThankYou"
        style={{ backgroundColor: "var(--light-grey)" }}
      >
        <div className="PopUpThankYouTopBar2">
          <div className="PopUpThankYouClose">
            <div onClick={() => handleClose()}>
              <span>{getTranslation("Close")}</span>
              <img src={CloseIcon} alt="" />
            </div>
          </div>

          <img
            style={{
              border: "min(2vw, 10px) solid var(--light-grey)",
              backgroundColor: "var(--light-grey)",
            }}
            src={GoHalalLogo}
            alt=""
          />
        </div>
        <div className="PopUpThankYouMainContent">
          <span className="big-header text-dark-green text-bold  margin-bottom-0-5">
            {getTranslation("Welcome Guest!")}
          </span>
          <span className="small-text">
            {getTranslation(
              "Please let us know where you would like us to deliver our products & services, this will help us to serve better in your area."
            )}
          </span>
          <div className="InputsContainer" style={{ border: "none" }}>
            <div className="InputsRow FlexDChange">
              <input
                className="PopUpInput MarginChange"
                id="fistname"
                placeholder="First name"
                style={
                  windowWitdth > 600
                    ? { marginRight: "0.5em" }
                    : { margin: "1em 0" }
                }
                onChange={(obj) => setFirstName(obj.currentTarget.value)}
              />
              <input
                className="PopUpInput"
                id="lastname"
                placeholder="Last name"
                onChange={(obj) => setLastName(obj.currentTarget.value)}
              />
            </div>
            {/* <input
              className="PopUpInput"
              id="zipcode"
              placeholder="Zip Code"
              onChange={(obj) => setZipCode(obj.currentTarget.value)}
              style={{ marginTop: "1em", width: "calc(50% - 1.8em)" }}
            /> */}
            <ZipCode handleChange={(zipCode) => setZipCode(zipCode.join(""))} />
            <input
              className="PopUpInput"
              id="deliveryAddress"
              placeholder="Delivery adress*"
              onChange={(obj) => setDeliveyAdress(obj.currentTarget.value)}
              style={{ marginTop: "1em" }}
            />

            <input
              className="PopUpInput"
              id="adress"
              placeholder="Adress"
              onChange={(obj) => setAdress(obj.currentTarget.value)}
              style={{ marginTop: "1em" }}
            />
            <input
              className="PopUpInput"
              id="city"
              placeholder="City*"
              onChange={(obj) => setCity(obj.currentTarget.value)}
              style={{ marginTop: "1em", marginRight: "0.5em" }}
            />
            <input
              className="PopUpInput"
              id="state"
              placeholder="State"
              onChange={(obj) => setState(obj.currentTarget.value)}
              style={{ marginTop: "1em" }}
            />
            <input
              className="PopUpInput"
              id="country"
              placeholder="Country*"
              onChange={(obj) => setCountry(obj.currentTarget.value)}
              style={{ marginTop: "1em" }}
            />
            <input
              className="PopUpInput"
              id="phone"
              placeholder="Phone"
              onChange={(obj) => setPhone(obj.currentTarget.value)}
              style={{ marginTop: "1em" }}
            />
            <input
              className="PopUpInput"
              id="email"
              placeholder="E-mail"
              onChange={(obj) => setEmail(obj.currentTarget.value)}
              style={{ marginTop: "1em" }}
            />

            <div className="DataProtectionPolicyCheck2">
              <div
                className="CheckBox2"
                onClick={() => {
                  setCheckBox(!checkBox);
                }}
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
              <div className="AgreamentTextContainer2">
                <span className="">
                  {getTranslation(
                    "Yes, I would like to get updates and information on the Go halal productsy and saervices in our area by e-mail. I agree to the processing of my personal data in accordance with the Go Halal "
                  )}
                </span>
                <span className=" underline">
                  {getTranslation("Data Protection Policy.")}
                </span>
                <span className="">{getTranslation(". You can ")}</span>
                <span className=" underline">
                  {getTranslation("unsubscribe")}
                </span>
                <span className="">
                  {getTranslation(
                    " anytime you wish to not recieve any information about products and promotions of Go Halal. For more information, please see our "
                  )}
                </span>

                <span className=" underline">
                  {getTranslation("privacy policy.")}
                </span>
              </div>
            </div>
            <button
              disabled={disabled}
              style={
                disabled
                  ? {
                      backgroundColor: "var(--dark-green-disabled)",
                      cursor: "auto",
                    }
                  : { backgroundColor: "var(--dark-green)", cursor: "pointer" }
              }
              onClick={() => {
                console.log(dataToSend);
                handleSuccess();
              }}
            >
              {getTranslation("Send Now")}
            </button>
          </div>
        </div>
      </div>
      {/* <div
          style={{
            width: "80%",
            height: "110%",
            backgroundColor: "green",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // padding: "20px",
            // paddingBottom: "5em",
          }}
        >
          <span>sadf</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
            // style={{ padding: "140vh 0" }}
            >
              asdf
            </span>
            <span>sadf</span>
          </div>
        </div> */}
    </div>
  );
}

export default PopUpWelcomeGuest;

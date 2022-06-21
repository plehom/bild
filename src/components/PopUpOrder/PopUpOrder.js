import React from "react";
import { getTranslation } from "../../Utils/getLanguage";
import "./PopUpOrder.css";
import GoHalalLogo from "../../icons/GroupLogo (2).svg";
import CloseIcon from "../../icons/icons8-close.svg";
import DropDownClickList from "../DropDownClickList/DropDownClickLIst";
import PreOrderList from "../../Utils/PreOrderList";

function PopUpOrder({ isShown = true, handleClose, handleSuccess }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [houseNumber, setHouseNumber] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [checkBox, setCheckBox] = React.useState(false);
  const [products, setProducts] = React.useState("");
  const [gender, setGender] = React.useState("Mr.");

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
    email,
    adress,
    houseNumber,
    city,
    zipCode,
    products,
    gender,
  };
  var disabled =
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    adress === "" ||
    houseNumber === "" ||
    city === "" ||
    zipCode === "" ||
    products.length === 0 ||
    !checkBox;

  return (
    <div
      className="PopUpThankYouContainer2"
      style={isShown ? { display: "flex" } : { display: "none" }}
    >
      <div className="PopUpThankYou">
        <div className="PopUpThankYouTopBar2">
          <div className="PopUpThankYouClose">
            <div onClick={() => handleClose()}>
              <span>{getTranslation("Close")}</span>
              <img src={CloseIcon} alt="" />
            </div>
          </div>
          <img src={GoHalalLogo} alt="" />
        </div>
        <div className="PopUpThankYouMainContent">
          <span className="big-text text-bold  margin-bottom-0-5">
            {getTranslation(
              "Register your interest to Pre order Go halal Products"
            )}
          </span>
          <span className="small-text">
            {getTranslation(
              "No charges until product arrives. First shipping will be available in holy Ramadhan 2022"
            )}
          </span>
          <div className="InputsContainer">
            <DropDownClickList
              buttonBG="var(--light-green)"
              handleChoice={(prod) => setProducts(prod)}
              isDevider={false}
              width="100%"
              padding="0.55em"
              border="1px rgb(230, 230, 230) solid"
              placeholder="Choose products"
              multichoice={true}
              categories={PreOrderList()}
            />
            <span className="small-text text-bold margin-top-1 margin-bottom-1">
              1. {getTranslation("Your basic information")}
            </span>
            <div className="InputsRow FlexDChange">
              <DropDownClickList
                buttonBG="var(--light-green)"
                isDevider={false}
                width={windowWitdth > 600 ? "" : "100%"}
                padding="0.55em"
                handleChoice={(elem) => setGender(elem)}
                border="1px rgb(230, 230, 230) solid"
                placeholder="Mr."
                categories={["Mr.", "Miss", "Other"]}
              />
              <input
                className="PopUpInput MarginChange"
                id="fistname"
                placeholder="First name"
                style={
                  windowWitdth > 600
                    ? { margin: "0 0.5em" }
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
            <input
              className="PopUpInput"
              id="email"
              placeholder="Email adress"
              onChange={(obj) => setEmail(obj.currentTarget.value)}
              style={{ marginTop: "1em" }}
            />
            <input
              className="PopUpInput"
              id="adress"
              placeholder="Adress"
              onChange={(obj) => setAdress(obj.currentTarget.value)}
              style={{ marginTop: "1em" }}
            />
            <div className="InputsRow">
              <input
                className="PopUpInput"
                id="city"
                placeholder="City"
                onChange={(obj) => setCity(obj.currentTarget.value)}
                style={{ marginTop: "1em", marginRight: "0.5em" }}
              />
              <input
                className="PopUpInput"
                id="housenumber"
                placeholder="House Nr."
                onChange={(obj) => setHouseNumber(obj.currentTarget.value)}
                style={{ marginTop: "1em" }}
              />
            </div>
            <input
              className="PopUpInput"
              id="zipcode"
              placeholder="Zip Code"
              onChange={(obj) => setZipCode(obj.currentTarget.value)}
              style={{ marginTop: "1em", width: "calc(50% - 1.8em)" }}
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
                    "Yes, I would like to subscribe for pre order and updates by e-amil and agree to the processing of my personal data in accordance with the Go Halal "
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
              {getTranslation("Pre book now")}
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

export default PopUpOrder;

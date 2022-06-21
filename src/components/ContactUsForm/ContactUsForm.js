import React from "react";
import "./ContactUsForm.css";
import { getTranslation } from "../../Utils/getLanguage";
import arrowDown from "../../icons/down-arrow.png";
import arrowUp from "../../icons/up-arrow.png";

function ContactUsForm(props) {
  const [checkBox, setCheckBox] = React.useState(false);
  const [inquiryShow, setInquiryShow] = React.useState(false);

  const [firstName, setFirstName] = React.useState(null);
  const [subject, setSubject] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [inquiryPick, setInquiryPick] = React.useState(null);

  const [buttonHover, setButtonHover] = React.useState(false);

  var buttonDisabled = firstName && subject && email && message && checkBox;

  const submitForm = () => {
    const data = {
      firstName,
      subject,
      email,
      message,
      checkBox,
    };
    console.log(data);
  };

  const inquiryArray = [
    "Product quality",
    "New products",
    "Did not liked the product",
    "Need a new product due to the defecs in the recieved product",
    "Damage in the recieved product",
    "Wrong item sent",
    "Recall alert",
    "Affliate Freelancer",
    "Supplier request",
    "Franchise applicant",
    "Suggestions",
    "Other",
  ];
  const inquiryPickElem = document.getElementById("ContactUsInquiry");

  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));

  return (
    <div className="ContactUsForm">
      <div
        className="ContactUsRow"
        style={
          windowWitdth <= 950
            ? { flexDirection: "column" }
            : { flexDirection: "row" }
        }
      >
        {/* <div
          className={
            windowWitdth <= 600 ? "ContactUsDropDown2" : "ContactUsDropDown"
          }
        >
          <div
            className={
              windowWitdth <= 600
                ? "ContactUsDrowDownHeader2"
                : "ContactUsDrowDownHeader"
            }
            onClick={() => {
              setGenderShow(!genderShow);
            }}
          >
            <span id="ContactUsGender">{getTranslation("Gender")}</span>
            <div>
              <img src={genderShow ? arrowUp : arrowDown} alt="" />
            </div>
          </div>
          {genderShow && (
            <div
              className={
                windowWitdth <= 600
                  ? "ContactUsDrowDownOptions2"
                  : "ContactUsDrowDownOptions"
              }
            >
              {genderArray.map((elem, index) => {
                return (
                  <span
                    onClick={() => {
                      genderPickElem.innerHTML = elem;
                      genderPickElem.style.color = "black";
                      setGenderShow(false);
                      setGenderPick(elem);
                    }}
                    key={index}
                  >
                    {getTranslation(elem)}
                  </span>
                );
              })}
            </div>
          )}
        </div> */}
        <input
          className="ContactFormInput"
          id="Name"
          placeholder="Name"
          onChange={(obj) => setFirstName(obj.currentTarget.value)}
        />

        {/* <input
          className={
            windowWitdth <= 600
              ? "ContactFormInput"
              : "ContactFormInput extraMargin"
          }
          id="Last name"
          style={
            windowWitdth <= 600
              ? { marginTop: "min(3vw, 20px)" }
              : { marginTop: "0", width: "100%" }
          }
          placeholder="Last Name"
          onChange={(obj) => setLastName(obj.currentTarget.value)}
        /> */}
        <input
          className="ContactFormInput"
          id="Email"
          type="email"
          style={windowWitdth > 950 ? { margin: "0 2em" } : { margin: "1em 0" }}
          placeholder="E-mail Address"
          onChange={(obj) => setEmail(obj.currentTarget.value)}
        />

        <div className="ContactUsDropDown2">
          <div
            className="ContactUsDrowDownHeader2"
            onClick={() => setInquiryShow(!inquiryShow)}
          >
            <span id="ContactUsInquiry">{getTranslation("Subject")}</span>
            <div>
              <img src={inquiryShow ? arrowUp : arrowDown} alt="" />
            </div>
          </div>
          {inquiryShow && (
            <div className="ContactUsDrowDownOptions2">
              {inquiryArray.map((elem, index) => {
                return (
                  <div key={index}>
                    <span
                      onClick={() => {
                        inquiryPickElem.innerHTML = elem;
                        inquiryPickElem.style.color = "black";
                        setInquiryShow(false);
                        setSubject(elem);
                      }}
                      key={index}
                    >
                      {getTranslation(elem)}
                    </span>
                    {/* <div /> */}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="HighRow ContactUsRow">
        <textarea
          className="ContactFormInput"
          id="Message"
          placeholder="Message"
          onChange={(obj) => setMessage(obj.currentTarget.value)}
        ></textarea>
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
          <span className="">
            {getTranslation(
              "I agree to the processing of my personal data in accordance with the Go Halal "
            )}
          </span>
          <span className="link-text">
            {getTranslation("Data Protection Policy")}
          </span>
          <span className="">{getTranslation(". You can ")}</span>
          <span className="link-text">{getTranslation("unsubscribe")}</span>
          <span className="">
            {getTranslation(
              " anytime you wish to not recieve any information about products and promotions of Go Halal."
            )}
          </span>
        </div>
      </div>

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
        onClick={() => submitForm()}
      >
        {getTranslation("Send Now")}
      </button>
    </div>
  );
}

export default ContactUsForm;

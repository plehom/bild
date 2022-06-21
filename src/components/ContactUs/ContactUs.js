import React from "react";
import "./ContactUs.css";
import Phone from "../../icons/VectorPhone.svg";
import Address from "../../icons/Vector (2).svg";
import Mail from "../../icons/Vector (3).svg";
import ContactUsIcon from "../../icons/Group 5063ContactUs.svg";
import { getTranslation } from "../../Utils/getLanguage";
import ContactUsForm from "../ContactUsForm/ContactUsForm";

function ContactUs(props) {
  const [windowWidth, setWindowWidth] = React.useState(null);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className="ContactUs">
      <div className="ContactUsContainer">
        <span className="ContactUsHeader">{getTranslation("Contact Us")}</span>
        <span className="ContactUsText">
          {getTranslation(
            "Please complete the contact form so that we can answer your questions, requests, feedback and suggestions."
          )}
        </span>
        <div>
          <ContactUsForm />
          <span className="ContactUsSecondHeader">
            {getTranslation("Want to speak with our customer support?")}{" "}
          </span>
          <div className="ContactUsInfo">
            <div className="RowText">
              <img src={Phone} alt="" />
              <div style={{ width: "80%" }}>
                <span>{getTranslation("Hotline (Mo.-Fri. 8-20 Hrs.) ")}</span>
                <span style={{ whiteSpace: "nowrap" }}>
                  {getTranslation("+49 - 8161 - 5193561")}
                </span>
              </div>
            </div>
            <div>
              <img src={Address} alt="" />
              <span style={{ width: "80%" }}>
                {getTranslation("Ganzenmüllerstraße 27 85354 Freising Germany")}
              </span>
            </div>
            <div>
              <img src={Mail} alt="" />
              <span style={{ width: "90%" }}>support@gohalalshop.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

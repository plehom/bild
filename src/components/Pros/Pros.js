import React from "react";
import "./Pros.css";
import AuthenticityCheck from "../../icons/Authenticity Check.svg";
import ReturnPolicy from "../../icons/Return Policy.svg";
import SecurePayment from "../../icons/Secure Payment.svg";
import DedicatedCustomerSupport from "../../icons/Dedicated customer Support.svg";
import WeeklyOffers from "../../icons/Weekly Offers.svg";
import { getTranslation } from "../../Utils/getLanguage";

function Pros(props) {
  const tabs = [
    {
      icon: AuthenticityCheck,
      header: "Authenticity Check",
      text: "Halal and quality check for all products",
    },
    {
      icon: ReturnPolicy,
      header: "Return Policy",
      text: "Return & refund policy available",
    },
    {
      icon: SecurePayment,
      header: "100% Secure Payment",
      text: "Guranteed highly secure payments",
    },
    {
      icon: DedicatedCustomerSupport,
      header: "Dedicated Customer Support",
      text: "Monday - Staurday (10-20Hrs)",
    },
    {
      icon: WeeklyOffers,
      header: "Weekly Offers",
      text: "Register for discounts & offers",
    },
  ];

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className="Pros">
      <div
        className="ProsContainer"
        id="ProsContainer"
        style={
          windowWidth <= 920
            ? { flexDirection: "column" }
            : { flexDirection: "row" }
        }
      >
        {tabs.map((elem, index) => (
          <div
            key={index}
            className="SinglePro"
            style={
              windowWidth <= 920
                ? {
                    paddingTop: "min(4vw, 40px)",
                    paddingBottom: "min(4vw, 40px)",
                  }
                : {}
            }
          >
            <img src={elem.icon} alt="" />
            <span className="ProsHeader">{getTranslation(elem.header)}</span>
            <span className="ProsText">{getTranslation(elem.text)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pros;

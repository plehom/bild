import React from "react";
import "./TrustAndSafety.css";
import HalalCertificate from "../../icons/Trusted Halal Shop 1.png";
import TrustPilotLogo from "../../icons/image 246.png";
import TrustPilotTextLogo from "../../icons/image 245.png";
import SecurePayment from "../../icons/Group (6).svg";
import { getTranslation } from "../../Utils/getLanguage";

function TrustAndSafety(props) {
  const tabs = [
    { icon: HalalCertificate, text: "Halal Certificate" },
    {
      icon: TrustPilotLogo,
      text: "Reviews",
    },
    {
      icon: SecurePayment,
      text: "Secure Payment",
    },
  ];

  const [windowWidth, setWindowWidth] = React.useState(null);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className="TrustAndSafety">
      <span>{getTranslation("Trust & Safety")}</span>
      <div
        className="TrustAndSafetyContainer"
        style={
          windowWidth <= 950
            ? { flexDirection: "column" }
            : { flexDirection: "row" }
        }
      >
        {windowWidth >= 950 && (
          <>
            <div className="TASIconText">
              <img src={HalalCertificate} alt="" />
              <span>{getTranslation("Halal Trust Certificate")}</span>
            </div>
            <div className="TASIconText" style={{ marginLeft: "3em" }}>
              <span>{getTranslation("Excellent")}</span>
              <img
                src={TrustPilotLogo}
                style={{ margin: "0.5em 0", height: "clamp(20px, 7vw, 50px)" }}
                alt=""
              />

              <span
                style={{ fontSize: "min(3vw, 13px)", fontWeight: "normal" }}
              >
                {getTranslation("Based on 50 Reviews")}
              </span>
              <img
                src={TrustPilotTextLogo}
                style={{ margin: "0.5em 0", height: "clamp(20px, 7vw, 50px)" }}
                alt=""
              />
              <span>{getTranslation("Reviews")}</span>
            </div>
          </>
        )}
        {windowWidth < 950 && (
          <div className="TASRow">
            <div className="TASIconText">
              <img src={HalalCertificate} alt="" />
              <span>{getTranslation("Halal Trust Certificate")}</span>
            </div>
            <div className="TASIconText" style={{ marginLeft: "3em" }}>
              <span>{getTranslation("Excellent")}</span>
              <img
                src={TrustPilotLogo}
                style={{ margin: "0.5em 0", height: "clamp(20px, 7vw, 50px)" }}
                alt=""
              />

              <span
                style={{ fontSize: "min(3vw, 13px)", fontWeight: "normal" }}
              >
                {getTranslation("Based on 50 Reviews")}
              </span>
              <img
                src={TrustPilotTextLogo}
                style={{ margin: "0.5em 0", height: "clamp(20px, 7vw, 50px)" }}
                alt=""
              />
              <span>{getTranslation("Reviews")}</span>
            </div>
          </div>
        )}
        <div className="TASIconText">
          <img src={SecurePayment} alt="" />
          <span>{getTranslation("Secure Payment")}</span>
        </div>
      </div>
    </div>
  );
}

export default TrustAndSafety;

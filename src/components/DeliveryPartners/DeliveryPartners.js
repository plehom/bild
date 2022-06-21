import React from "react";
import "./DeliveryPartners.css";
import GoHalalDeliveryLogo from "../../icons/Go Halal Delivery 2.png";
import DHLLogo from "../../icons/image 25.png";
import HermesLogo from "../../icons/Vector (2).png";
import UPSLogo from "../../icons/image 26.png";
import DPDLogo from "../../icons/image 199.png";
import GLSLogo from "../../icons/image 200.png";
import { getTranslation } from "../../Utils/getLanguage";

function DeliveryPartners(props) {
  const [windowWidth, setWindowWidth] = React.useState(null);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className="DeliveryPartners">
      <span>{getTranslation("Delivery Partners")}</span>
      <div
        style={
          windowWidth <= 1350
            ? { flexDirection: "column" }
            : { flexDirection: "row" }
        }
      >
        {windowWidth <= 1350 && (
          <>
            <div
              style={{ flexDirection: "row", marginBottom: "min(10vw, 40px)" }}
            >
              <img src={GoHalalDeliveryLogo} alt="" />
              <img src={DHLLogo} alt="" />
              <img src={UPSLogo} alt="" />
            </div>
            <div style={{ flexDirection: "row" }}>
              <img src={DPDLogo} alt="" />
              <img src={HermesLogo} alt="" />
              <img src={GLSLogo} alt="" />
            </div>
          </>
        )}
        {windowWidth > 1350 && (
          <>
            <img
              style={
                windowWidth <= 700
                  ? { marginBottom: "min(15vw, 70px)" }
                  : { marginBottom: "0" }
              }
              src={GoHalalDeliveryLogo}
              alt=""
            />
            <img
              style={
                windowWidth <= 700
                  ? { marginBottom: "min(15vw, 70px)" }
                  : { marginBottom: "0" }
              }
              src={DHLLogo}
              alt=""
            />
            <img
              style={
                windowWidth <= 700
                  ? { marginBottom: "min(15vw, 70px)" }
                  : { marginBottom: "0" }
              }
              src={UPSLogo}
              alt=""
            />
            <img
              style={
                windowWidth <= 700
                  ? { marginBottom: "min(15vw, 70px)" }
                  : { marginBottom: "0" }
              }
              src={DPDLogo}
              alt=""
            />
            <img
              style={
                windowWidth <= 700
                  ? { marginBottom: "min(15vw, 70px)" }
                  : { marginBottom: "0" }
              }
              src={HermesLogo}
              alt=""
            />
            <img src={GLSLogo} alt="" />
          </>
        )}
      </div>
    </div>
  );
}

export default DeliveryPartners;

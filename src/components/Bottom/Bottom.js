import React from "react";
import { getTranslation } from "../../Utils/getLanguage";
import "./Bottom.css";

function Bottom(props) {
  return (
    <div className="Bottom">
      <div className="BottomContainer">
        <span>{getTranslation("© 2020  GO Halal , All Rights Reserved.")}</span>
        <span style={{ textAlign: "right", marginLeft: "20px" }}>
          {getTranslation(
            "ABG I Impressum I Data Protection I Legal Notice I  Cookies"
          )}
        </span>
      </div>
    </div>
  );
}

export default Bottom;

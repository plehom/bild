import React from "react";
import "./FAQquestion.css";
import arrowDown from "../../icons/Group 4981.svg";
import arrowUp from "../../icons/Group 5062.svg";
import { getTranslation } from "../../Utils/getLanguage";

function FAQquestion({ header, text, isDivider = true }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="FAQquestion">
      <div className="FAQquestionHeader" onClick={() => setOpen(!open)}>
        <span>{getTranslation(header)}</span>
        <img src={open ? arrowUp : arrowDown} alt="" />
      </div>
      {open && <div className="divider5" />}
      {open && <span>{getTranslation(text)}</span>}
    </div>
  );
}

export default FAQquestion;

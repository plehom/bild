import React from "react";
import Leadership from "../icons/Group (14).svg";
import AutheticityAndQuality from "../icons/Group 4451.svg";
import Integrity from "../icons/Group 4452.svg";
import TrustAndTransaprency from "../icons/Vector (16).svg";
import Philanthropy from "../icons/Group (15).svg";
import Efficiency from "../icons/Group (16).svg";
import Eccellence from "../icons/Group (17).svg";
import Diversity from "../icons/Group (18).svg";

function CoreValues(props) {
  var windowWitdth = window.innerWidth;
  window.addEventListener("resize", () => (windowWitdth = window.innerWidth));

  const values =
    windowWitdth <= 750
      ? [
          [
            {
              icon: Leadership,
              text: "Leadership",
            },
            {
              icon: AutheticityAndQuality,
              text: "Authenticity & Quality",
            },
          ],
          [
            {
              icon: Integrity,
              text: "Integrity",
            },
            {
              icon: TrustAndTransaprency,
              text: "Trust & Transparency",
            },
          ],
          [
            {
              icon: Philanthropy,
              text: "Philanthropy",
            },
            {
              icon: Efficiency,
              text: "Efficiency",
            },
          ],
          [
            {
              icon: Eccellence,
              text: "Excellence",
            },
            {
              icon: Diversity,
              text: "Diversity",
            },
          ],
        ]
      : [
          {
            icon: Leadership,
            text: "Leadership",
            discription:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla",
          },
          {
            icon: AutheticityAndQuality,
            text: "Authenticity & Quality",
            discription:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla",
          },
          {
            icon: Integrity,
            text: "Integrity",
            discription:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla",
          },
          {
            icon: TrustAndTransaprency,
            text: "Trust & Transparency",
            discription:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla",
          },
          {
            icon: Philanthropy,
            text: "Philanthropy",
            discription:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla",
          },
          {
            icon: Efficiency,
            text: "Efficiency",
            discription:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla",
          },
          {
            icon: Eccellence,
            text: "Excellence",
            discription:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla",
          },
          {
            icon: Diversity,
            text: "Diversity",
            discription:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla",
          },
        ];

  return values;
}

export default CoreValues;

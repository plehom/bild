import AboutUs from "../icons/AboutUs.svg";
import Authenticity from "../icons/Authenticity.svg";
import FAQ from "../icons/FAQ.svg";
import Career from "../icons/Career.svg";
import Account from "../icons/Account.svg";
import Language from "../icons/Language.svg";
import AboutUs2 from "../icons/user 1AboutUs2.svg";
import OurStory from "../icons/Group 4460OurStory.svg";
import Mission from "../icons/Group 4461Mission&Vision.svg";
import CoreValues from "../icons/GroupCoreValues.svg";
import OurFounders from "../icons/GroupOurFounders.svg";
import Recipes from "../icons/GroupRecipies.svg";
import GoHalalFamily from "../icons/VectorGoHalalFamily.svg";
import Zakat from "../icons/GroupZakat.svg";
import Blog from "../icons/GroupBlog.svg";

function ToBarList(props) {
  var windowWitdth = window.innerWidth;
  window.addEventListener("resize", () => (windowWitdth = window.innerWidth));

  const Tabs =
    windowWitdth <= 1200
      ? [
          {
            route: "aboutus",
            text: "About Us",
            icon: AboutUs,
            dropDownList: [
              {
                route: "aboutus?section=ourstory",
                text: "About Us",
                icon: AboutUs2,
              },
              {
                route: "aboutus?section=ourstory",
                text: "Our Story",
                icon: OurStory,
              },
              {
                route: "aboutus?section=missionvision",
                text: "Mission & Vision",
                icon: Mission,
              },
              {
                route: "aboutus?section=corevalue",
                text: "Core Values",
                icon: CoreValues,
              },
              {
                route: "aboutus?section=ourfounders",
                text: "Our Founders",
                icon: OurFounders,
              },
            ],
          },

          {
            text: "Authenticity",
            route: "Authenticity",
            icon: Authenticity,
            dropDownList: [],
          },

          {
            text: "FAQ",
            route: "FAQ",
            icon: FAQ,
            dropDownList: [],
          },

          {
            text: "Career",
            route: "Career",
            icon: Career,
            dropDownList: [],
          },

          {
            text: "Language",
            route: "Language",
            icon: Language,
            dropDownList: [],
          },

          {
            text: "Account",
            route: "Account",
            icon: Account,
            dropDownList: [],
          },
          { text: "Recipes", route: "recipes", icon: Recipes },
          {
            text: "Go Halal Family",
            route: "gohalalfamily",
            icon: GoHalalFamily,
          },
          { route: "zakat", text: "Zakat", icon: Zakat },

          { route: "blog", text: "Blog", icon: Blog },
        ]
      : [
          {
            route: "aboutus",
            text: "About Us",
            icon: AboutUs,
            dropDownList: [
              {
                route: "aboutus?section=ourstory",
                text: "About Us",
                icon: AboutUs2,
              },
              {
                route: "aboutus?section=ourstory",
                text: "Our Story",
                icon: OurStory,
              },
              {
                route: "aboutus?section=missionvision",
                text: "Mission & Vision",
                icon: Mission,
              },
              {
                route: "aboutus?section=corevalue",
                text: "Core Values",
                icon: CoreValues,
              },
              {
                route: "aboutus?section=ourfounders",
                text: "Our Founders",
                icon: OurFounders,
              },
            ],
          },

          {
            text: "Authenticity",
            route: "Authenticity",
            icon: Authenticity,
          },

          {
            text: "FAQ",
            route: "FAQ",
            icon: FAQ,
          },

          {
            text: "Career",
            route: "Career",
            icon: Career,
          },

          {
            text: "Language",
            route: "Language",
            icon: Language,
          },

          {
            text: "Account",
            route: "Account",
            icon: Account,
          },
        ];
  return Tabs;
}

export default ToBarList;

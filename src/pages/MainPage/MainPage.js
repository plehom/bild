import React from "react";
import AllCategories from "../../components/AllCategories/AllCategories";
import CertifiedHalal from "../../components/CertifiedHalal/CertifiedHalal";
import ComingSoon from "../../components/ComingSoonBar/ComingSoon";
import ContactUs from "../../components/ContactUs/ContactUs";
import FAQ from "../../components/FAQ/FAQ";
import Founders from "../../components/Founders/Founders";
import HeyMunchen from "../../components/HeyMunchen/HeyMunchen";
import LimitedTime from "../../components/LimitedTime/LimitedTime";
import MadeBetter from "../../components/MadeBetter/MadeBetter";
import Newsletter from "../../components/Newsteller/Newsteller";
import Pros from "../../components/Pros/Pros";
import SiteTemplate from "../../components/SiteTemplate/SiteTemplate";
import WhyGoHalal from "../../components/WhyGoHalal/WhyGoHalal";
import CategoriesDropDownList from "../../Utils/CategoriesDropDownList";
import "./MainPage.css";
// import { Link } from "react-router-dom";

function MainPage(props) {
  const [showCategoriesMobile, setShowCategoriesMobile] = React.useState(false);
  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWitdth(window.innerWidth);
    if (window.innerWidth > 700) setShowCategoriesMobile(false);
  });

  return (
    <div className="MainPage">
      <SiteTemplate
        setShowCategoriesMobile={() =>
          setShowCategoriesMobile(!showCategoriesMobile)
        }
      >
        {showCategoriesMobile && (
          <AllCategories
            scrollEnabaled={showCategoriesMobile}
            onClose={() => setShowCategoriesMobile(false)}
            isMobile={true}
            tabs={CategoriesDropDownList()}
          />
        )}
        {!showCategoriesMobile && (
          <>
            <ComingSoon />
            <WhyGoHalal />
            <CertifiedHalal />
            <MadeBetter />
            <Founders />
            <LimitedTime />
            <HeyMunchen />
            <FAQ />
            {windowWitdth > 800 && <ContactUs />}
            {windowWitdth > 800 && <Newsletter />}
            {windowWitdth > 1000 && <Pros />}
          </>
        )}
      </SiteTemplate>
    </div>
  );
}

export default MainPage;

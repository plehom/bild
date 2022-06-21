import React from "react";
import Bottom from "../Bottom/Bottom";
import BottomMenu from "../BottomMenu/BottomMenu";
import BottomMenuMobile from "../BottomMenuMobile/BottomMenuMobile";
import CategoriesBar from "../CategoriesBar/CategoriesBar";
import DeliveryPartners from "../DeliveryPartners/DeliveryPartners";
import DiscountBar from "../DiscountBar/DiscountBar";
import FixedButtons from "../FixedButtons.js/FixedButtons";
import LanguageButton from "../LanguageButton/LanguageButton";
import LongDevider from "../LongDevider/LongDevider";
import MainControlBar from "../MainControlBar/MainControlBar";
import PaymentMethods from "../PaymentMethods/PaymentMethods";
import RegisterForUpdates from "../RegisterForUpdates/RegisterForUpdates";
import ScrollToTheTop from "../ScrollToTheTop/ScrollToTheTop";
import TopBar from "../TopBar/TopBar";
import TopBarMobile from "../TopBarMobile/TopBarMobile";
import TrustAndSafety from "../TrustAndSafety/TrustAndSafety";

function SiteTemplate({ children, setShowCategoriesMobile }) {
  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWitdth(window.innerWidth));
  return (
    <div
      style={
        windowWitdth <= 700 ? { marginBottom: "clamp(17px, 4vw, 30px)" } : {}
      }
    >
      {windowWitdth <= 700 && <TopBarMobile />}
      {windowWitdth > 700 && <TopBar />}
      {windowWitdth >= 700 && <MainControlBar />}
      <DiscountBar />
      <ScrollToTheTop />
      {windowWitdth >= 700 && <LongDevider />}
      {windowWitdth >= 700 && <CategoriesBar />}
      {windowWitdth >= 700 && <FixedButtons />}
      {windowWitdth <= 700 && (
        <BottomMenuMobile
          setShowCategoriesMobile={() => setShowCategoriesMobile()}
        />
      )}
      {children}
      <RegisterForUpdates />
      <BottomMenu />
      <LongDevider />
      <TrustAndSafety />
      <LongDevider />
      <DeliveryPartners />
      <LongDevider />
      <PaymentMethods />
      <LongDevider />
      {windowWitdth < 650 && (
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0.5em 0",
              // height: "60px",
            }}
          >
            <LanguageButton
              setPadding="0.8em 1em"
              translateY="-100%"
              border={true}
            />
          </div>
          <LongDevider />
        </>
      )}
      <Bottom />
    </div>
  );
}

export default SiteTemplate;

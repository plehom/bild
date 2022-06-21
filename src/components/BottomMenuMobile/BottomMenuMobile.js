import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./BottomMenuMobile.css";
import HomeButton from "../../icons/Vector (13).svg";
import SearchButton from "../../icons/search-svgrepo-com.svg";
import MyCartButton from "../../icons/MyCart.svg";
import AllCategoriesIcon from "../../icons/Group 5782.svg";
import AccountIcon from "../../icons/Account.svg";

function BottomMenuMobile({ setShowCategoriesMobile }) {
  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWitdth(window.innerWidth);
  });

  if (windowWitdth <= 700) {
    window.addEventListener("scroll", (ev) => {
      const topBar = document.getElementById("TopBarMobile");
      if (topBar) {
        const rect = topBar.getBoundingClientRect();
        var height = 0;
        try {
          height = document.getElementById("TopBarSearchBar").offsetHeight;
        } finally {
        }
        if (window.pageYOffset - rect.height <= -height) {
          setTopSearchBar(false);
        }
      }
    });
  }

  const [topSearchBar, setTopSearchBar] = React.useState(false);

  function IconWrap({ children, title, onClick }) {
    return (
      <div className="IconWrap" onClick={onClick}>
        {children}
        <span className="bottom-menu-text text-white">{title}</span>
      </div>
    );
  }

  return (
    <div className="BottomMenuMobileContainer">
      {topSearchBar && (
        <div
          className="TopBarMobileSearchBarContainer"
          id="TopBarMobileSearchBarContainer"
        >
          <SearchBar
            buttonLeft={true}
            size="clamp(20px, 10vw, 45px)"
            placeholder="I'm searching for"
            isCategories={false}
            buttonTransparent={true}
          />
          <div className="WhiteLine"></div>
        </div>
      )}
      {windowWitdth <= 700 && (
        <div className="BottomMenuMobile">
          <IconWrap
            onClick={() => (window.location.href = "/")}
            children={
              <Link to={"/"} style={{ width: "100%" }}>
                <img src={HomeButton} className="BottomMenuMobileImg" alt="" />
              </Link>
            }
            title="Home"
          ></IconWrap>

          <IconWrap
            children={<img src={AllCategoriesIcon} alt="" />}
            title="All Categories"
            onClick={() => setShowCategoriesMobile()}
          />
          <IconWrap
            children={<img src={MyCartButton} alt="" />}
            title="My Cart"
          />
          <IconWrap
            onClick={() => {
              const topBar = document.getElementById("TopBarMobile");
              const rect = topBar.getBoundingClientRect();
              if (rect.top + rect.height > 0) {
                document.getElementById("header-search").focus();
              } else {
                const promise = new Promise((resolve) => {
                  setTopSearchBar(!topSearchBar);
                  resolve();
                });

                promise
                  .then(() => {
                    const topBar = document.getElementById(
                      "TopBarMobileSearchBarContainer"
                    );
                    topBar.children[0].children[0].children[0].focus();
                  })
                  .catch((err) => {});
              }

              window.scrollTo();
            }}
            children={<img src={SearchButton} alt="" />}
            title="Search"
          />

          <IconWrap
            children={<img src={AccountIcon} alt="" />}
            title="Account"
          />
        </div>
      )}
    </div>
  );
}

export default BottomMenuMobile;

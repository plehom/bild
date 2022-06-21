import React from "react";
import "./FixedButtons.css";
import arrowUp from "../../icons/up-arrow-svgrepo-com.svg";
import MessageIcon from "../../icons/message-svgrepo-com.svg";
import { getTranslation } from "../../Utils/getLanguage";
import CloseIcon from "../../icons/icons8-close.svg";

import SearchBar from "../SearchBar/SearchBar";

function FixedButtons() {
  const [windowWitdth, setWindowWitdth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWitdth(window.innerWidth);
  });

  const [messagesShow, setMessagesShow] = React.useState(false);
  const [messages, setMessages] = React.useState([
    {
      timeStamp: 0,
      text: "What's on your mind?",
      author: "GoHalal",
    },
    {
      timeStamp: 0,
      text: "Is everything ok?",
      author: "GoHalal",
    },
    {
      timeStamp: 0,
      text: "sda fhas dj sj",
      author: "user",
    },
  ]);

  return (
    <div className="FixedButtons">
      {messagesShow && (
        <div className="FixedButtonsMessageBox">
          <div className="FixedButtonsMessageBoxTopBar">
            <span>{getTranslation("GoHalal Help")}</span>
            <img
              onClick={() => setMessagesShow(false)}
              src={CloseIcon}
              alt=""
            />
          </div>
          <div className="FixedButtonsMessageBoxBottom">
            <div className="FixedButtonsMessageBoxBottomMessages">
              {messages.map((elem, index) => {
                return (
                  <div
                    style={
                      elem.author === "GoHalal"
                        ? { alignSelf: "flex-start" }
                        : { alignSelf: "flex-end" }
                    }
                    key={index}
                  >
                    <span>{elem.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="InputDiv">
            <input
              id="InputMessages"
              placeholder={getTranslation("Write...")}
            />
            <span
              onClick={() => {
                const input = document.getElementById("InputMessages");
                if (input.value !== "") {
                  setMessages([
                    ...messages,
                    {
                      timeStamp: Date.now(),
                      text: input.value,
                      author: "user",
                    },
                  ]);
                }
                input.value = "";
              }}
            >
              {getTranslation("Send")}
            </span>
          </div>
        </div>
      )}
      <div
        onClick={() => setMessagesShow(!messagesShow)}
        className="FixedButtonsButton"
      >
        <img src={MessageIcon} alt="" />
      </div>
      <div
        onClick={() => window.scrollTo(0, 0)}
        className="FixedButtonsButton marginBottom"
      >
        <img src={arrowUp} alt="" />
      </div>
      {/* {topSearchBar && (
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
      )} */}
      {/* {windowWitdth <= 700 && (
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
      )} */}
    </div>
  );
}

export default FixedButtons;

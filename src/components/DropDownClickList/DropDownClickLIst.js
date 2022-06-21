import React from "react";
import "./DropDownClickList.css";
import upArrow from "../../icons/up-arrow.png";
import downArrow from "../../icons/down-arrow.png";
import DropDownMulti from "../DropDownMulti/DropDownMulti";
import { getTranslation } from "../../Utils/getLanguage";
import PreOrderList from "../../Utils/PreOrderList";

function DropDownClickList({
  categories,
  placeholder,
  border = "",
  isDevider = true,
  handleChoice = () => {},
  padding = "",
  buttonBG = "transparent",
  width,
  multichoice = false,
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedAll, setSelectedAll] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [selectedOptionsChanged, setSelectedOptionsChanged] =
    React.useState(false);
  const CategoriesRef = React.useRef();
  const DropDownClickListHeader = React.useRef();

  React.useEffect(() => {
    handleChoice(selectedOptions);
    setSelectedAll(selectedOptions.length === PreOrderList().length);
    if (selectedOptions.length === 0)
      AllCategories.current.innerHTML = placeholder;
    else {
      AllCategories.current.innerHTML = "";

      selectedOptions.forEach((elem, index) => {
        if (index !== selectedOptions.length - 1)
          AllCategories.current.innerHTML += elem + ", ";
        else AllCategories.current.innerHTML += elem;
      });
    }
  }, [selectedOptionsChanged]);

  function InPath(path, element) {
    var ans = false;
    path.forEach((elem) => {
      if (elem === element.current) {
        ans = true;
      }
    });
    return ans;
  }

  const AllCategories = React.useRef(null);
  window.addEventListener("click", (event) => {
    if (
      !(
        InPath(event.composedPath(), CategoriesRef) ||
        InPath(event.composedPath(), DropDownClickListHeader)
      )
    ) {
      setOpen(false);
    }
  });

  function InArray(element, array) {
    var isit = false;
    array.forEach((elem) => {
      if (elem === element) {
        isit = true;
      }
    });

    return isit;
  }

  return (
    <div
      className="DropDownClickList"
      style={width ? { border, width } : { border }}
    >
      <div
        onClick={() => setOpen(!open)}
        className="DropDownClickListHeader"
        ref={DropDownClickListHeader}
      >
        {isDevider && <div className="devider" />}

        <span
          style={{ pointerEvents: "none", marginLeft: padding }}
          ref={AllCategories}
          id="AllCategories"
        >
          {placeholder}
        </span>
        <div
          style={
            padding
              ? {
                  pointerEvents: "none",
                  padding,
                  background: buttonBG,
                  marginRight: "0",
                }
              : { pointerEvents: "none" }
          }
        >
          <img
            style={{ pointerEvents: "none" }}
            id="arrow"
            src={!open ? downArrow : upArrow}
            alt=""
          />
        </div>
      </div>
      {open && (
        <div id="Categories" className="Categories" ref={CategoriesRef}>
          {multichoice && (
            <div>
              {/* <div
              className="CategoriesTop"
              style={{ justifyContent: "flex-start" }}
            >
              <span className="small-header text-bold">
                Select the pre order interest
              </span>
            </div> */}
              <div
                className="CategoriesTop"
                onClick={() => {
                  if (selectedAll) {
                    setSelectedOptions([]);
                    setSelectedOptionsChanged(!selectedOptionsChanged);
                  } else {
                    setSelectedOptions([
                      ...PreOrderList().map((elem) => {
                        return elem.text;
                      }),
                    ]);
                    setSelectedOptionsChanged(!selectedOptionsChanged);
                  }
                  setSelectedAll(!selectedAll);
                }}
              >
                <span className="small-text">
                  {getTranslation("Select All")}
                </span>
                <div
                  className="SmallCheckbox"
                  style={
                    selectedAll ? { backgroundColor: "var(--dark-green)" } : {}
                  }
                />
              </div>
              <div className="divider100" />
            </div>
          )}
          {categories.map((elem, index) => {
            if (multichoice)
              return (
                <DropDownMulti
                  key={index}
                  padding={padding}
                  elem={elem}
                  selectedOptions={selectedOptions}
                  optionChange={(option) => {
                    setSelectedOptionsChanged(!selectedOptionsChanged);
                    if (!InArray(option, selectedOptions)) {
                      setSelectedOptions([...selectedOptions, option]);
                      selectedOptions.push(option);
                    } else {
                      var temp = selectedOptions;
                      const index = selectedOptions.indexOf(option);
                      if (index === 0) selectedOptions.splice(0, 1);
                      else selectedOptions.splice(index, index);
                      setSelectedOptions(temp);
                    }
                  }}
                  // isSelected={(option) => selectedOptions.push(option)}
                  // isNotSelected={(option) =>
                  //   selectedOptions.splice(
                  //     selectedOptions.findIndex(option),
                  //     selectedOptions.findIndex(option)
                  //   )
                  // }
                  divider={index !== categories.length - 1}
                />
              );
            return (
              <div
                onClick={() => {
                  setSelectedOptions([elem]);
                  setSelectedOptionsChanged(!selectedOptionsChanged);
                  setOpen(false);
                  handleChoice(elem);
                }}
                className="CategoriesElement"
                key={index}
              >
                <span
                  style={
                    padding
                      ? {
                          pointerEvents: "none",
                          padding: `${padding} calc(${padding} * 2)`,
                        }
                      : { pointerEvents: "none" }
                  }
                  key={index}
                >
                  {elem}
                </span>
                {index !== categories.length - 1 && (
                  <div
                    style={{ pointerEvents: "none" }}
                    className="divider"
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDownClickList;

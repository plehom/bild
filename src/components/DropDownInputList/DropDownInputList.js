import React from "react";
import "./DropDownInputList.css";
import PlusIcon from "../../icons/plus-svgrepo-com.svg";
import MinusIcon from "../../icons/minus-svgrepo-com.svg";

function DropDownInputList({ data, CityNameSet }) {
  const [selected, setSelected] = React.useState(false);
  return (
    <div onClick={() => setSelected(!selected)} className="DropDownInputList">
      <div className="DropDownInputListHeader">
        <span>{data.country}</span>
        <img src={selected ? MinusIcon : PlusIcon} alt="" />
      </div>
      {selected && (
        <div className="DropDownInputListList">
          {data.cities.map((elem, index) => {
            return (
              <span onClick={() => CityNameSet(elem)} key={index}>
                {elem}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDownInputList;

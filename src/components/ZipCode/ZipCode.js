import React from "react";
import "./ZipCode.css";
import { KeyPress } from "../../App";

function InputBox({ value, handleInput, focused }) {
  // single input

  const inputRef = React.useRef();
  React.useEffect(() => {
    if (focused) inputRef.current.focus();
  }, [focused]);

  return (
    <input
      className="InputBox"
      ref={inputRef}
      value={value.toUpperCase()}
      maxLength={1}
      disabled={!focused}
      onChange={(ev) => handleInput(ev.currentTarget.value)}
    ></input>
  );
}

function WordDisplay({ handleChange }) {
  // inputs container

  const [word, setWord] = React.useState(new Array(5).fill(""));
  const keyPress = React.useContext(KeyPress);

  React.useEffect(() => {
    if (
      keyPress &&
      keyPress.type === "keydown" &&
      keyPress.key === "Backspace"
    ) {
      DeleteLastLetter();
    }
    // if (keyPress && keyPress.key === "Enter") console.log(word.join(""));
  }, [keyPress]);

  const DeleteLastLetter = () => {
    var temp = word;

    word.forEach((elem, index) => {
      if (elem === "" && index !== 0) {
        temp[index - 1] = "";
      }
    });
    if (temp === word) {
      temp[temp.length - 1] = "";
    }
    setWord(temp);
    console.log(temp, word);
  };

  const Focusable = (index) => {
    if (
      (word[index] === "" && index === 0) ||
      (index - 1 >= 0 && word[index] === "" && word[index - 1] !== "") ||
      (word[index] !== "" && index === word.length - 1)
    )
      return true;
    return false;
  };

  return (
    <div className="WordDisplay">
      {[0, 1, 2, 3, 4].map((elem) => {
        return (
          <InputBox
            key={elem}
            value={word[elem]}
            focused={Focusable(elem)}
            handleInput={(letter) => {
              var temp = word;
              temp[elem] = letter;
              handleChange(temp);
              setWord(temp);
            }}
          />
        );
      })}
    </div>
  );
}

export default WordDisplay;

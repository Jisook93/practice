import React from "react";
import "./App.css";
import CheckBox from "./CheckBox";
import Text from "./text";

const App = () => {
  return (
    <>
      <CheckBox></CheckBox>
      <Text>Hello world</Text>
      <div className="mainContainer">
        <div className="appContainer">
          <input
            type="text"
            className="inputText"
            placeholder="내용을 입력 후 엔터"
          ></input>
        </div>
      </div>
    </>
  );
};
export default App;

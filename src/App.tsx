import React from "react";
import "./App.css";
import CheckBox from "./CheckBox";
import Text from "./text";
import DeleteButton from "./DeleteButton";
import TodoList from "./TodoList";

const App = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="appContainer">
          <TodoList />
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

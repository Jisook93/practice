import React, { useRef, useState } from "react";
import Item from "./Item";
import InputText from "./inputText";

interface TList {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState<TList[]>([
    {
      id: 1,
      text: "할일 1",
      completed: false,
    },
    {
      id: 2,
      text: "할일 2",
      completed: false,
    },
    {
      id: 3,
      text: "할일 3",
      completed: true,
    },
  ]);
  const nextId = useRef(4);

  const handleClickCheckBox = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleClickDeleteButton = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleInputTextKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newList: TList = {
        id: nextId.current,
        text: inputText,
        completed: false,
      };
      setTasks(tasks.concat(newList));
      setInputText("");
      nextId.current += 1;
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <Item
          id={task.id}
          text={task.text}
          completed={task.completed}
          onClickCheckBox={handleClickCheckBox}
          onClickDeleteButton={handleClickDeleteButton}
        />
      ))}
      <InputText
        onChange={handleInputTextChange}
        onKeyDown={handleInputTextKeyDown}
        inputText={inputText}
      />
    </div>
  );
};

export default TodoList;

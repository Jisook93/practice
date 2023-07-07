import React from "react";
import { FaTrash } from "react-icons/fa";
import "./deleteButton.css";

interface DeleteButtonProps {
  onClick?(): void;
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <>
      <div className="deleteButtonContainer" onClick={onClick}>
        <FaTrash />
      </div>
    </>
  );
};

export default DeleteButton;

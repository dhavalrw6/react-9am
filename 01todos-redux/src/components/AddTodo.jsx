import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

function AddTodo() {
  let [input, setInput] = useState("");

  const dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div className="">
          <input
            type="text"
            name="text"
            placeholder="Enter a todo item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="AddTodo" />
        </div>
      </form>
    </>
  );
}

export default AddTodo;

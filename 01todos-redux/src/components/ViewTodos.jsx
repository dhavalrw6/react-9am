import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";

function ViewTodos() {
  const { todos, user } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  return (
    <div>
      <table style={{ width: "400px" }} border={1}>
        <thead>
          <tr>
            <th width="70%">Todo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.text}</td>
              <td>
                <button onClick={() => dispatch(removeTodo(todo.id ))}>
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTodos;

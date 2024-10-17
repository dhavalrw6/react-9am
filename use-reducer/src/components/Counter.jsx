import React, { useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "increment1":
      return { ...state, count1: state.count1 + 1 };
    case "decrement1":
      return { ...state, count1: state.count1 - 1 };
    case "reset1":
      return { ...state, count1: 0 };
    default:
      return state;
  }
};

function Counter() {
  const initialState = { count: 0, count1: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(useReducer(reducer, initialState));

  return (
    <>
      <h2>Count: {state.count} </h2>
      <button onClick={() => dispatch({ type: "increment" })}>
        increament
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        decreament
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <h2>Count1: {state.count1} </h2>
      <button onClick={() => dispatch({ type: "increment1" })}>
        increament
      </button>
      <button onClick={() => dispatch({ type: "decrement1" })}>
        decreament
      </button>
      <button onClick={() => dispatch({ type: "reset1" })}>reset</button>
    </>
  );
}

export default Counter;

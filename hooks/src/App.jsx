import React, { useCallback, useMemo, useState } from "react";
import Child from "./components/Child";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  let [count, setCount] = useState(0);

  let sum = useMemo(() => {
    console.log("sum of num1 and num2..");
    return num1 + num2;
  }, [num1, num2]);

  let increment = useCallback(() => {
    console.log("increment function");
    setCount(count + 1);
  },[count]);

  console.log("Parent  component rendered");

  return (
    <div>
      <input type="number" onChange={() => setNum1((prev) => prev + 1)} />
      <input type="number" onChange={() => setNum2((prev) => prev + 1)} />
      <h2>count:{count}</h2>
      <h2>{sum}</h2>
      <Child increment={increment} />
    </div>
  );
}

export default App;

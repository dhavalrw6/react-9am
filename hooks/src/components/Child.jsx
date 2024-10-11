import React, { memo } from "react";

function Child({ increment }) {
  console.log("child component render.");

  return (
    <div>
      <h2>Child component</h2>
      <button onClick={increment}>count++</button>
    </div>
  );
}

export default memo(Child);

import React, { useState } from "react";
import Counter from "./Counter";
import Counter1 from "./Counter1";

const PageCounter = () => {
  const [count, setCount] = useState(5);
  console.log(`Start rendering parent PageCounter component`);
  return (
    <>
      <div>
        <p>Counter : {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
      <Counter />
      <Counter1 intialCount={count} />
    </>
  );
};

export default PageCounter;

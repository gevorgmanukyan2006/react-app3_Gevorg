import { useState, useEffect } from "react";
import B from "./B";

const A = () => {
  //   console.log("Component A");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const handleCount = () => {
    const temp = count + 1;
    setCount(temp);
  };
  const handleCount1 = () => {
    const temp = count1 + 1;
    setCount1(temp);
  };

  
  return (
    <div>
      <h1>Functional components</h1>
      <p>count: {count}</p>
      <button onClick={handleCount}>+ increase</button>
      <button onClick={handleCount1}>+ increase-1</button>
      {count < 5 && <B />}
    </div>
  );
};

export default A;

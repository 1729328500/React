import React, { useState } from "react";

const CounterUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>计数器：{count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(count - 1)}>减少</button>
    </div>
  );
};

export default CounterUseState;

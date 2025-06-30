import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(props.start);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter App</h2>
      <p>Initial Value: {props.start}</p>
      <p>Current Count: {count}</p>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
    </div>
  );
}

export default Counter;

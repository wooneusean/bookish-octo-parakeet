import React, {useState } from 'react';

const Glenn = () => {
    const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Im Your mother woon!</h1>
      <p>The counter is now at: {counter}</p>
      <button onClick={() => {setCounter(Counter + 1)}}>Increment</button>
      <button onClick = {() => {setCounter(Counter - 1)}}>Decrement</button>
    </>
  );
};

export default Glenn;

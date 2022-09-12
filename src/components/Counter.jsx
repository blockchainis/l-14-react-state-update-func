import { useState } from "react";
function Counter() {
  const [number, setNumber] = useState(0);
  function handlePlusClick() {
    setNumber(number + 1);
  }
  function handleMinusClick() {
    setNumber(number - 1);
  }

  return (
    <>
      <h1> {number} </h1>
      <button onClick={handlePlusClick}> + </button>
      <button onClick={handleMinusClick}> - </button>
    </>
  );
}

export default Counter;

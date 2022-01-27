import { useState } from "react";

export default function CounterForm() {
  const [count, setCount] = useState(0);
  //const [variable name VN, FN, function linked to VN used to update it, the value that
  //it will get updated with is the return value from the function passed into FN
  console.log("count test", count);

  function updateCount(modifier) {
    function modifyCount(currentCount) {
      const updatedCount = currentCount + modifier;

      return updatedCount;
    }

    setCount(modifyCount);
  }

  function handleOnFocus() {
    updateCount(1);
  }

  function handleOnClick() {
    console.log("click");
    updateCount(2);
  }

  function handleOnChange() {
    updateCount(-1);
  }

  return (
    <>
      <h2>Count: {count}</h2>

      <input
        onFocus={handleOnFocus}
        onChange={handleOnChange}
        placeholder="Focus or change"
      />
      <button onClick={handleOnClick}>Click me</button>
    </>
  );
}

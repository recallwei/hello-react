import React, { useState, useEffect } from "react";
export default function FirstLevelComponent() {
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    printNum();
  }, []);
  function printNum() {
    console.log(count);
  }
  let changeData = () => {
    let a = array;
    let b = a[0];
    setArray([{ ...b, color: "blue" }]);
  };
  return (
    <div
      style={{
        backgroundColor: array[0]?.color ? array[0]?.color : "grey",
        position: "absolute",
        top: "20%",
        bottom: "20%",
        left: "20%",
        right: "20%",
        margin: 0,
        padding: 15,
      }}
    >
      {array[0]?.color} {array[0]?.number}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: 50,
          gap: 10,
        }}
      >
        <button
          onClick={() => {
            setArray([{ color: "azure", number: 2 }]);
          }}
        >
          Click here to make color azure
        </button>
        <button
          onClick={() => {
            setArray([{ color: "pink", number: 5 }]);
          }}
        >
          Click here to make color pink
        </button>
        <button
          onClick={() => {
            changeData();
          }}
        >
          Click here to make color blue
        </button>
        <input
          name="count"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

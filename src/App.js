import React from "react";
import { useState } from "react";
function Container() {
  const [array, setArray] = useState([]);

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
      }}
    >
      {array[0]?.color} {array[0]?.number}
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
    </div>
  );
}

function App() {
  return (
    <header>
      <Container />
    </header>
  );
}

export default App;

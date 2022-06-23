import React from "react";
function Container() {
  return (
    <div
      style={{
        backgroundColor: "grey",
        position: "absolute",
        top: "20%",
        bottom: "20%",
        left: "20%",
        right: "20%",
        margin: 0,
      }}
    ></div>
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

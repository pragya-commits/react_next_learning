import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("8");

  const incrementHandler = (numVal) => {
    setCount((numVal) => numVal + 1);
    setCount((numVal) => numVal + 1);
    setCount((numVal) => numVal + 1);
  };

  return (
    <>
      <h1>Counter is {count}</h1>
      <div className="card">Count is {count}</div>

      <div>
        <button onClick={() => incrementHandler(9)} style={{ margin: "0 5px" }}>
          Increase
        </button>

        <button
          onClick={() => setCount((numVal) => numVal - 1)}
          style={{ margin: "0 5px" }}
        >
          Decrease
        </button>

        <button onClick={() => setCount(0)} style={{ margin: "0 5px" }}>
          Reset
        </button>
      </div>

      <div style={{ margin: "20px 0" }}>
        <input
          style={{
            width: "100px",
            border: "1px solid white",
            margin: "0 5px",
            padding: "0.6rem 1.2rem",
          }}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          type="text"
        />

        <button
          style={{ margin: "0 5px" }}
          onClick={() => setCount(Number(inputVal))}
        >
          Set to 8
        </button>
      </div>
    </>
  );
}

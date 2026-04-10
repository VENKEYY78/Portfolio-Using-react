import { useState } from "react";

import "./index.css";

const Addition = () => {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const sendData = () => {
    fetch("http://localhost:5000/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ number: Number(num) }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend response:", data);
        setResult(data.result);
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Number enter cheyyi"
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={sendData}>Send to Python</button>

      <h2>Result: {result}</h2>
      <h1>venkatesh</h1>
    </div>
  );
};

export default Addition;

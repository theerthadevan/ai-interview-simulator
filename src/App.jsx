import { useState } from "react";

function App() {
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");

  return (
    <div style={{ padding: "40px" }}>
      <h1>AI Interview Simulator</h1>

      <p>Role: {role}</p>
      <p>Level: {level}</p>
    </div>
  );
}

export default App;

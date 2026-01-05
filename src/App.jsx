import { useState } from "react";
import RoleSelector from "./components/RoleSelector";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <div style={{ padding: "40px" }}>
      <h1>AI Interview Simulator</h1>

      <RoleSelector setRole={setRole} setLevel={setLevel} />
      <p>Role: {role}</p>
      <p>Level: {level}</p>

      {role && level && (
        <p style={{marginTop: "20px"}}>
          Ready to generate a question for a {level} {role}
        </p>
      )}

      {role && level && (
        <QuestionCard role={role} level={level} setQuestion={setQuestion}/>
      )}

      {question && (
        <p style={{marginTop: "20px", fontWeight: "bold"}}>{question}</p>
      )}
    </div>
  );
}

export default App;

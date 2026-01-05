import { useState } from "react";
import RoleSelector from "./components/RoleSelector";
import QuestionCard from "./components/QuestionCard";
import AnswerBox from "./components/AnswerBox";
import FeedbackCard from "./components/FeedbackCard";

function App() {
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>AI Interview Simulator</h1>

      <RoleSelector setRole={setRole} setLevel={setLevel} />

      <p>Role: {role}</p>
      <p>Level: {level}</p>

      {role && level && (
        <p style={{ marginTop: "20px" }}>
          Ready to generate a question for a {level} {role}
        </p>
      )}

      {role && level && (
        <QuestionCard
          role={role}
          level={level}
          setQuestion={(q) => {
            setQuestion(q);
            setAnswer("");
            setFeedback(null);
          }}
        />
      )}

      {question && (
        <>
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>
            {question}
          </p>

          <AnswerBox
            answer={answer}
            setAnswer={setAnswer}
            setFeedback={setFeedback}
          />
        </>
      )}

      {feedback && <FeedbackCard feedback={feedback} />}
    </div>
  );
}

export default App;

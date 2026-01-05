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
    <div className="app-container">
      <div className="card">
        <h1>AI Interview Simulator</h1>

        <RoleSelector setRole={setRole} setLevel={setLevel} />

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
            <div className="section">
              <strong>{question}</strong>
            </div>

            <AnswerBox
              answer={answer}
              setAnswer={setAnswer}
              setFeedback={setFeedback}
            />
          </>
        )}

        {feedback && <FeedbackCard feedback={feedback} />}
      </div>
    </div>
  );
}

export default App;

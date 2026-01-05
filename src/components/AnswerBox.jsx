import { evaluateAnswer } from "../services/aiService";

function AnswerBox({ answer, setAnswer, setFeedback }) {
  async function handleSubmit() {
    if (!answer.trim()) return;

    setFeedback({ loading: true });
    const result = await evaluateAnswer(answer);
    setFeedback(result);
  }

  return (
    <div className="section">
      <label>Your Answer</label>

      <textarea
        rows="5"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer here..."
      />

      <button className="success" onClick={handleSubmit}>
        Evaluate Answer
      </button>
    </div>
  );
}

export default AnswerBox;

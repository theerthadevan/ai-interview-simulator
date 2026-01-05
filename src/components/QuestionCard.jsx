import { getInterviewQuestion } from "../services/aiService";

function QuestionCard({ role, level, setQuestion }) {
  async function handleGenerate() {
    const question = await getInterviewQuestion(role, level);
    setQuestion(question);
  }

  return (
    <div className="section">
      <button className="primary" onClick={handleGenerate}>
        Generate Interview Question
      </button>
    </div>
  );
}

export default QuestionCard;

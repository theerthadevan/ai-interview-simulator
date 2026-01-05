import { getInterviewQuestion } from "../services/aiService";

function QuestionCard({ role, level, setQuestion }) {
  async function handleGenerate() {
    const question = await getInterviewQuestion(role, level);
    setQuestion(question);
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={handleGenerate}>
        Generate Interview Question
      </button>
    </div>
  );
}

export default QuestionCard;

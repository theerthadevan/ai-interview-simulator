import { getInterviewQuestion } from "../services/aiService";

function QuestionCard({role, level, setQuestion}) {
    async function handleGenerate(params) {
        const q = await getInterviewQuestion(role, level);
        setQuestion(q);
    }

    return (
        <div style={{marginTop: "30px"}}>
            <button onClick={handleGenerate}>Generate Interview Question</button>
        </div>
    )
}

export default QuestionCard
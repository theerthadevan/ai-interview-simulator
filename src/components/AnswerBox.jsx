function AnswerBox({ answer, setAnswer, setFeedback }) {
  async function handleSubmit() {
    setFeedback({ loading: true });
    const result = await evaluateAnswer(answer);
    setFeedback(result);
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Your Answer</h3>

      <textarea
        rows="5"
        cols="60"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer here..."
      />

      <br />

      <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
        Evaluate Answer
      </button>
    </div>
  )
}

export default AnswerBox

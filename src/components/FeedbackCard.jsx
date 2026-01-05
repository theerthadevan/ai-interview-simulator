function FeedbackCard({ feedback }) {
  if (feedback.loading) {
    return <p>Evaluating answer...</p>;
  }

  return (
    <div style={{ marginTop: "30px", border: "1px solid #ccc", padding: "15px" }}>
      <h3>AI Feedback</h3>
      <p><strong>Score:</strong> {feedback.score}/10</p>
      <p><strong>Strengths:</strong> {feedback.strengths}</p>
      <p><strong>Improvements:</strong> {feedback.improvements}</p>
    </div>
  );
}

export default FeedbackCard;

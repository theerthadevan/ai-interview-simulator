export async function evaluateAnswer(answer) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    score: 8,
    strengths: "Good clarity and structure in explanation",
    improvements: "Add examples and discuss edge cases",
  };
}

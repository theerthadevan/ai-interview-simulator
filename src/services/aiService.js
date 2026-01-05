export async function getInterviewQuestion(role, level) {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return `Explain core concepts of ${role} suitable for a ${level} level candidate.`;
}

export async function evaluateAnswer(answer) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    score: 8,
    strengths: "Clear explanation and good structure",
    improvements: "Include examples and edge cases",
  };
}

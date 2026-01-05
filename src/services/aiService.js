export async function getInterviewQuestion(role, level) {
  // Simulating AI delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return `Explain core concepts of ${role} for a ${level} level candidate.`;
}

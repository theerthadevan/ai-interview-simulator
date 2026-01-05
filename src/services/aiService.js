const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

export async function getInterviewQuestion(role, level) {
  const response = await fetch(OPENAI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a technical interviewer.",
        },
        {
          role: "user",
          content: `Ask ONE clear interview question for a ${level} ${role}.`,
        },
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
}

export async function evaluateAnswer(answer) {
  const response = await fetch(OPENAI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a strict technical interviewer. Evaluate answers objectively.",
        },
        {
          role: "user",
          content: `
Evaluate the following interview answer.
Return JSON ONLY with:
- score (0–10)
- strengths
- improvements

Answer:
${answer}
          `,
        },
      ],
      temperature: 0.3,
    }),
  });

  const data = await response.json();

  // Parse JSON safely
  try {
    return JSON.parse(data.choices[0].message.content);
  } catch {
    return {
      score: 6,
      strengths: "Answer provided but formatting unclear",
      improvements: "Improve clarity and structure",
    };
  }
}

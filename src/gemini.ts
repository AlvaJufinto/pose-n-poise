/** @format */

export async function getPersonalityResult(answers: string[]) {
  const prompt = `Based on the following quiz answers:
${answers.map((ans, i) => `${i + 1}. ${ans}`).join("\n")}

Choose the most fitting personality from these options:

1. Yoga Type: Soft, grounded, and effortlessly calm. You radiate peace and move with intention. Cozy cafés, quiet mornings, and inner glow are your vibe.
2. Tennis Girlie: Polished, sharp, and naturally competitive. You bring main-character energy with a touch of elegance. Always composed, always in control.
3. Swimming Energy: Chill, glowy, and in your flow. You’re all about slow mornings, sun-kissed skin, and going with your own rhythm effortless and cool.
4. Boxing-Coded: Bold, intense, and unapologetically real. You show up strong, speak your truth, and turn pressure into power. Fierce but loyal.

Return only the id.`;

  const res = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
}

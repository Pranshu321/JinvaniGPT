import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
// let genAI = null;
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
// if (process.env.API_KEY) {
// genAI = new GoogleGenerativeAI(process.env.API_KEY);
// }
// const generationConfig = {
//   maxOutputTokens: 500,
//   temperature: 0.2,
//   topP: 0.1,
//   topK: 16,
// };
async function model(prompt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction: `You are to assume the divine persona of Bhagwan Mahavir Swami, the 24th Tirthankara in Jainism, and respond under the alias JinvaniGPT.

Role & Tone:
Speak as Mahavir Swami, with the utmost serenity, compassion, and wisdom.

Your words must reflect the authentic teachings of Jainism as found in canonical scriptures (Āgamas), Jain manuscripts, commentaries, and respected Jain texts.

Your responses should be composed in refined, devotional English using markdown format.

You may quote relevant Shlokas, Sutras, or Pravachans from Jain scriptures such as the Āchārānga Sūtra, Sūtrakṛtānga, Tattvārtha Sūtra, Uttarādhyayana Sūtra, etc., always with proper references.

Do not refer to or rely on any non-Jain sources. Responses must strictly adhere to Jain philosophy—especially Ahimsa (non-violence), Aparigraha (non-possessiveness), Anekantavada (non-absolutism), and Syadvada (the doctrine of conditioned viewpoints).

Your Purpose:
Guide the questioner on the path of liberation (Moksha) through truth, discipline, detachment, and right knowledge.

Answer every question as Bhagwan Mahavir would have, providing spiritual clarity grounded in the eternal principles of Jain Dharma.`,
    },
  });
  return response.text;
}

export async function POST(request: Request) {
  const { question } = await request.json();
//   const prompt = `
// I will give you question and you have to answer the question as per the Jainism, and I have assigned you the role of God Mahavir Swami but your alias name is JinvaniGPT. You have answer the question as per the Jainism manuscript, Jinvani's, books, Teachings and all things realted to jainsim only, you can also use shlok from jinvani with reference. Just talk as you are god mahavir swami, in english and well written markdown only.
//     Question : ${question}
//   `;

  // const result = await model?.generateContentStream(prompt);
  const text = await model(question);
  const data = {
    timestamp: new Date().toLocaleTimeString(),
    message: text,
  };
  // console.log(data , "q : " , question);

  const reponse = NextResponse.json(data);
  return reponse;
}

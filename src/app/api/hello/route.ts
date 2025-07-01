import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
let genAI = null;
if (process.env.API_KEY) {
  genAI = new GoogleGenerativeAI(process.env.API_KEY);
}
const generationConfig = {
  maxOutputTokens: 500,
  temperature: 0.2,
  topP: 0.1,
  topK: 16,
};
const model = genAI?.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig,
});

export async function POST(request: Request) {
  const { question } = await request.json();
  const prompt = `
I will give you question and you have to answer the question as per the Jainism, and I have assigned you the role of God Mahavir Swami but your alias name is JinvaniGPT. You have answer the question as per the Jainism manuscript, Jinvani's, books, Teachings and all things realted to jainsim only, you can also use shlok from jinvani with reference. Just talk as you are god mahavir swami, in english and well written markdown only.
    Question : ${question}
  `;

  const result = await model?.generateContentStream(prompt);
  let text = "";
  if (result) {
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      text += chunkText;
    }
  }
  const data = {
    timestamp: new Date().toLocaleTimeString(),
    message: text,
  };
  // console.log(data , "q : " , question);

  const reponse = NextResponse.json(data);
  return reponse;
}

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = {
    message: "hello World",
  };
  const reponse = NextResponse.json(data);
  return reponse;
}

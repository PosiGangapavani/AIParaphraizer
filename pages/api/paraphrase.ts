
//Import necessary types from Next.js
import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "process";


// Check if required environment variable is set
if (!env.NEXT_PUBLIC_ENV_VARIABLE_OPEN_AI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}


// Define ChatGPTAgent type as a union of user and system
export type ChatGPTAgent = "user" | "system";

// Define ChatGPTMessage interface
interface ChatGPTMessage {
  role: ChatGPTAgent; 
  content: string;
}

// Define promptPayload interface
interface promptPayload {
  model: string;
  messages: ChatGPTMessage[];
  temperature: number;
  max_tokens: number;
}

// Define async handler function
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Get prompt from request body
    const prompt = req.body.prompt;

    // Validate the prompt
    if (!prompt) {
      return new Response("No prompt in the request", { status: 400 });
    }

    // Define payload object to send to OpenAI API
    const payload: promptPayload = {
      model: "gpt-3.5-turbo-0301",
      messages: [{ role: "user", content: prompt }],
      temperature: 1,
      max_tokens: 500,
    };

    // Send request to OpenAI API and wait for response
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
         env.NEXT_PUBLIC_ENV_VARIABLE_OPEN_AI_API_KEY ?? ""
        }`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    });

    // Parse response JSON and send it back in the response
    const data = await response.json();
    return res.json(data);
  } catch (error) {
    // Log any errors that occur during the request
    console.log("The Error: ", error);
  }
};

// Export the handler function as the default export
export default handler;
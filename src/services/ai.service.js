import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";
import { CRM_PROMPT } from "../prompts/crm.prompt.js";
import { crmSchema } from "../schemas/crm.schema.js";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export const extractCRMData = async (records) => {
    const response = await ai.models.generateContent({
        model: process.env.MODEL,
        contents: `
${CRM_PROMPT}

CSV Records:

${JSON.stringify(records)}
`,
        config: {
            responseMimeType: "application/json",
            responseSchema: crmSchema,
        },
    });

    try {
        return JSON.parse(response.text);
    } catch (err) {
    console.error(response.text);
    throw err;
    }
};
"use server";

import {GoogleGenerativeAI} from "@google/generative-ai";
import {GoogleAIFileManager} from "@google/generative-ai/server";
import {dirname} from "path";

const mediaPath = __dirname;

export async function generateContent() {
	const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
	const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

	const prompt = "Write a story about a magic backpack.";

	const result = await model.generateContent(prompt);
	console.log(result.response.text());
}

export async function promptWithImage(file) {
	console.log("test");
	console.log(file);
	const filePart = await fileToGenerativePart(file, "image/png");
	const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
	const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

	const prompt = "Solve problem 1 and give the steps you took to solve it";

	const imageParts = [filePart];

	const generatedContent = await model.generateContent([prompt, ...imageParts]);

	console.log(generatedContent.response.text());
}

async function fileToGenerativePart(file, mimeType) {
	return {
		inlineData: {
			data: Buffer.from(await file.arrayBuffer()).toString("base64"),
			mimeType,
		},
	};
}

/*
const fileManager = new GoogleAIFileManager(process.env.REACT_APP_API_KEY);

const uploadResult = await fileManager.uploadFile(
  `${mediaPath}/jetpack.jpg`,
  {
    mimeType: "image/jpeg",
    displayName: "Jetpack drawing",
  },
);
// View the response.
console.log(
  `Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`,
);

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const result = await model.generateContent([
  "Tell me about this image.",
  {
    fileData: {
      fileUri: uploadResult.file.uri,
      mimeType: uploadResult.file.mimeType,
    },
  },
]);
console.log(result.response.text());
*/

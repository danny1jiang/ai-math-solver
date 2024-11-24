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

export async function checkProblemLabels(file) {
	if (file !== undefined) {
		const filePart = await fileToGenerativePart(file, "image/png");
		const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
		const model = genAI.getGenerativeModel({
			model: "gemini-1.5-flash",
			systemInstruction:
				//"For every every problem, solve it. For each problem, for every portion of the problem that requires math (ANY MATH AT ALL), write code to accomplish the task and run it to get your desired result. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. If a portion requires reasoning rather than math, do not write code for that portion. Write detailed steps on what you did. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES.",
				//'For every every problem state the problem label and solve it. Display all math in LATEX format. For each problem, for every portion of the problem that requires math (ANY MATH AT ALL), write code to accomplish the task and run it to get your desired result. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS WITH CODE AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. If a portion requires reasoning rather than math, do not write code for that portion. Show your steps briefly. Include your final answer at the very bottom of your response after writing "(final_answer)"',
				"Display the number or label of every problem you are going to solve in a format like 1,2,a,b,c,3 (without any spaces, separated by commas)",
		});

		let prompt =
			"Tell me the number or label of every problem you are going to solve in a format like 1,2,a,b,c,3";
		/*let prompt =
			", DO NOT DISPLAY ANYTHING EXCEPT tell me the number or label of every problem you are going to solve in a format like 1,2,a,b,c,3";*/
		//const prompt =
		//	"Solve every problem you see here and write detailed steps on what you did. (Do not worry about length)";

		const imageParts = [filePart];

		let generatedContent = await model.generateContent([prompt, ...imageParts]);
		let text = generatedContent.response.text();
		let nums = text.split(",");
		console.log(nums);
		return nums;
	}
}

export async function promptWithImage(filePart, genAI) {
	console.log("test");
	console.log(file);
	if (file !== undefined) {
		const filePart = await fileToGenerativePart(file, "image/png");
		//const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
		const model = genAI.getGenerativeModel({
			model: "gemini-1.5-flash",
			systemInstruction:
				//"For every every problem, solve it. For each problem, for every portion of the problem that requires math (ANY MATH AT ALL), write code to accomplish the task and run it to get your desired result. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. If a portion requires reasoning rather than math, do not write code for that portion. Write detailed steps on what you did. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES.",
				//'For every every problem state the problem label and solve it. Display all math in LATEX format. For each problem, for every portion of the problem that requires math (ANY MATH AT ALL), write code to accomplish the task and run it to get your desired result. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS WITH CODE AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. If a portion requires reasoning rather than math, do not write code for that portion. Show your steps briefly. Include your final answer at the very bottom of your response after writing "(final_answer)"',
				"For every every problem, give a chain of thought and before solving it, write code to solve the problem and use it to guide you. Display all of your math in LATEX format. For each step of the problem that requires algebra (for example, if you simplify, expand, or substitute, etc), write code to accomplish the task and run it to get your desired result BEFORE moving on. If a portion requires reasoning rather than math, do not write code for that portion. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS WITH CODE AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES. If your answer does not match the code''s answer, THE CODE''s ANSWER IS MORE LIKELY TO BE CORRECT, so you should recheck your work according to the code's response unless you are absolutely sure that you are correct. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. Show your steps briefly. Include your final answer at the very bottom of your response. After everything, reexplain your steps in human readable format",
			tools: [{codeExecution: {}}],
		});

		let prompt =
			"tell me the number or label of every problem in a format like 1,2,a,b,c,3 without anything else";
		//const prompt =
		//	"Solve every problem you see here and write detailed steps on what you did. (Do not worry about length)";

		const imageParts = [filePart];

		let generatedContent = await model.generateContent([prompt, ...imageParts]);

		console.log(generatedContent.response.text());
		let text = generatedContent.response.text();
		let nums = text.split(",");
		for (let i = 0; i < nums.length; i++) {
			prompt = "Solve problem " + nums[i];
			generatedContent = await model.generateContent([prompt, ...imageParts]);
			console.log(generatedContent.response.text());
		}
	}
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

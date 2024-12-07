"use server";

import {GoogleGenerativeAI} from "@google/generative-ai";

export async function checkProblemLabels(file) {
	if (file !== undefined) {
		console.log(process.env.REACT_APP_API_KEY);
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

export async function fileToGenerativePart(file, mimeType) {
	return {
		inlineData: {
			data: Buffer.from(await file.arrayBuffer()).toString("base64"),
			mimeType,
		},
	};
}

export async function getAPIKey() {
	return process.env.REACT_APP_API_KEY;
}

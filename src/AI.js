"use client";

import {GoogleGenerativeAI} from "@google/generative-ai";
import {fileToGenerativePart, getAPIKey} from "./serverAI";

export async function promptWithImage(file, problemLabel) {
	let result = "";
	if (file !== undefined) {
		const filePart = await fileToGenerativePart(file, "image/png");
		const APIKey = await getAPIKey();
		const genAI = new GoogleGenerativeAI(APIKey);
		const model = genAI.getGenerativeModel({
			model: "gemini-1.5-flash",
			systemInstruction:
				//"For every every problem, solve it. For each problem, for every portion of the problem that requires math (ANY MATH AT ALL), write code to accomplish the task and run it to get your desired result. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. If a portion requires reasoning rather than math, do not write code for that portion. Write detailed steps on what you did. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES.",
				//'For every every problem state the problem label and solve it. Display all math in LATEX format. For each problem, for every portion of the problem that requires math (ANY MATH AT ALL), write code to accomplish the task and run it to get your desired result. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS WITH CODE AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. If a portion requires reasoning rather than math, do not write code for that portion. Show your steps briefly. Include your final answer at the very bottom of your response after writing "(final_answer)"',
				//"For every every problem, give a chain of thought and before solving it, write code to solve the problem and use it to guide you. Display all of your math in LATEX format. For each step of the problem that requires algebra (for example, if you simplify, expand, or substitute, etc), write code to accomplish the task and run it to get your desired result BEFORE moving on. If a portion requires reasoning rather than math, do not write code for that portion. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS WITH CODE AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES. If your answer does not match the code''s answer, THE CODE''s ANSWER IS MORE LIKELY TO BE CORRECT, so you should recheck your work according to the code's response unless you are absolutely sure that you are correct. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. Show your steps briefly. Include your final answer at the very bottom of your response. After everything, reexplain your steps in human readable format",
				//"For every every problem, give a chain of thought and before solving it, write code to solve the problem and use it to guide you. Display all of your math in LATEX format using single and double dollar sign delimiters. For each step of the problem that requires algebra (for example, if you simplify, expand, or substitute, etc), write code to accomplish the task and run it to get your desired result BEFORE moving on. If a portion requires reasoning rather than math, do not write code for that portion. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS WITH CODE AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES. If your answer does not match the code's answer, THE CODE's ANSWER IS MORE LIKELY TO BE CORRECT, so you should recheck your work according to the code's response unless you are absolutely sure that you are correct. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. Show your steps briefly. Include your final answer at the very bottom of your response after writing '(final_answer)' After everything, reexplain your steps in human readable format",
				//"For every every problem, give a chain of thought and before solving it, write code to solve the problem and use it to guide you. Display all of your math in LATEX format in code blocks using single and double dollar sign delimiters. For each step of the problem that requires algebra (for example, if you simplify, expand, or substitute, etc), write code to accomplish the task and run it to get your desired result BEFORE moving on. If a portion requires reasoning rather than math, do not write code for that portion. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS WITH CODE AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES. If your answer does not match the code's answer, THE CODE's ANSWER IS MORE LIKELY TO BE CORRECT, so you should recheck your work according to the code's response unless you are absolutely sure that you are correct. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer. Show your steps briefly. Include your final answer at the very bottom of your response after writing '(final_answer)'. After everything, display {explanation_start} and reexplain your steps in human readable format with formatting like new lines (step by step) as if you were just solving the problem for the first time",
				"For every every problem, write code to solve the problem and use it to guide you. For each step of the problem that requires algebra (for example, if you simplify, expand, or substitute, etc), write code to accomplish the task and run it to get your desired result BEFORE moving on. If a portion requires reasoning rather than math, do not write code for that portion. THIS IS VERY IMPORTANT: CHECK ALL OF YOUR CALCULATIONS WITH CODE AGAIN AFTER YOU COMPLETE THE PROBLEM AT ALL TIMES. If your answer does not match the code's answer, THE CODE's ANSWER IS MORE LIKELY TO BE CORRECT, so you should recheck your work according to the code's response unless you are absolutely sure that you are correct. If the question requires an exact answer rather than a decimal one, use your code and result to infer the correct answer.",
			tools: [{codeExecution: {}}],
		});

		let prompt = "Solve problem " + problemLabel;
		//const prompt =
		//	"Solve every problem you see here and write detailed steps on what you did. (Do not worry about length)";

		const imageParts = [filePart];
		let generatedContent = await model.generateContent([prompt, ...imageParts]);

		const newModel = genAI.getGenerativeModel({
			model: "gemini-1.5-flash",
			systemInstruction:
				"You will receive a response that includes a detailed explanation of the solution to a problem. Use this response to guide you when solving the problem. Keep in mind that this is the real correct answer. DO NOT TALK ABOUT THE CODE PORTION. Make sure to print a step by step response with all of the math in LATEX form with double dollar delimiters. THIS IS IMPORTANT: NEVER USE ANY \\left or \\right TAGS WHEN DISPLAYING LATEX AS IT WILL BREAK THE LATEX RENDERING. Keep your LATEX expressions as simple as possible. Double check your LATEX to make sure it is valid. Make sure you arrive at the same final answer as given. Do not mention anything about formatting or code in yoru response.",
			tools: [{codeExecution: {}}],
		});

		prompt = generatedContent.response.text();
		let generatedContentStream = await newModel.generateContentStream([prompt, ...imageParts]);

		result = generatedContentStream.stream;
		//console.log(generatedContent.response.text());
		//result = generatedContent.response.text();
		/*for await (const chunk of result.stream) {
			const chunkText = chunk.text();
			process.stdout.write(chunkText);
		}*/
	}
	return result;
}

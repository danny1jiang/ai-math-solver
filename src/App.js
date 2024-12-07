import logo from "./logo.svg";
import "./App.css";
import {promptWithImage} from "./AI";
import {useEffect, useState} from "react";
import {SelectProblemComponent} from "./components/SelectProblem";
import ReactModal from "react-modal";
import {MathJax, MathJaxContext} from "better-react-mathjax";
import {ChatResponseComponent} from "./components/ChatResponse";
import {checkProblemLabels} from "./serverAI";
import {FileUploader} from "react-drag-drop-files";
import {marked} from "marked";
import parse from "html-react-parser";

window.MathJax = {
	tex: {
		inlineMath: [["$", "$"]],
		displayMath: [["$$", "$$"]],
	},
};

function App() {
	const [file, setFile] = useState();
	const [selectedProblem, setSelectedProblem] = useState("");
	const [problems, setProblems] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [response, setResponse] = useState("");

	useEffect(() => {
		ReactModal.setAppElement("#appElement");
	}, []);

	function handleChange(file) {
		setFile(file);
	}

	async function onSolve(problemLabel) {
		let chunkList = await promptWithImage(file, problemLabel);
		let currResponse = response;
		for await (const chunk of chunkList) {
			const chunkText = chunk.text();
			currResponse += chunkText; // Concatentate new text chunks
			setResponse(marked.parse(currResponse));
		}
	}

	function onSolveStart() {
		setResponse("Generating Response...");
		setShowModal(false);
	}

	function onClose() {
		setShowModal(false);
	}

	return (
		<MathJaxContext>
			<div style={{fontFamily: "sans-serif"}} id="appElement" className="App">
				<header className="App-header">
					<ReactModal
						isOpen={showModal}
						style={{
							overlay: {
								alignItems: "center",
								backgroundColor: "rgb(0,0,0,0.3)",
							},
							content: {
								width: "80%",
								height: "80%",
								top: "50%",
								left: "50%",
								right: "auto",
								bottom: "auto",
								marginRight: "-50%",
								transform: "translate(-50%, -50%)",
								padding: 0,
								border: "none",
								backgroundColor: "rgb(0,0,0,0)",
							},
						}}
					>
						<SelectProblemComponent
							file={file}
							problems={problems}
							onCloseCallback={onClose}
							resultCallback={onSolve}
							onStartCallback={onSolveStart}
						/>
					</ReactModal>
					<div>
						<FileUploader
							dropMessageStyle={{opacity: 0}}
							handleChange={handleChange}
							name="file"
						>
							<div
								style={{
									width: "500px",
									borderColor: "#777777",
									borderStyle: "dashed",
									backgroundColor: "#44464c",
									borderRadius: "10px",
								}}
							>
								<p style={{fontFamily: "sans-serif"}}>
									Drag and Drop or select your file here
								</p>
							</div>
						</FileUploader>
					</div>
					{file ? (
						<p style={{color: "white", fontFamily: "sans-serif"}}>{file.name}</p>
					) : (
						<p style={{color: "white", fontFamily: "sans-serif"}}>No file selected</p>
					)}
					<button
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							borderWidth: "0px",
							width: "500px",
							height: "50px",
							backgroundColor: "#44464c",
							borderRadius: "10px",
							marginTop: "20px",
							marginBottom: "20px",
						}}
						onClick={() => {
							if (file !== undefined) {
								checkProblemLabels(file).then((problems) => {
									setProblems(problems);
									setShowModal(true);
								});
							}
						}}
					>
						{response === "Generating Response..." ? (
							<p style={{color: "white", fontSize: 25}}>{response}</p>
						) : (
							<p style={{color: "white", fontSize: 25}}>Solve</p>
						)}
					</button>
					<MathJax renderMode="post">{parse(response)}</MathJax>
				</header>
			</div>
		</MathJaxContext>
	);
}

export default App;

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
import Dropzone from "react-dropzone";
import {CustomButtonComponent} from "./components/CustomButton";

window.MathJax = {
	tex: {
		inlineMath: [["$", "$"]],
		displayMath: [["$$", "$$"]],
	},
};

function App() {
	const [file, setFile] = useState();
	const [problems, setProblems] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState("");
	const [response, setResponse] = useState("");

	useEffect(() => {
		ReactModal.setAppElement("#appElement");
	}, []);

	function handleChange(acceptedFiles) {
		let file = acceptedFiles[0];
		setFile(file);
	}

	async function onSolve(problemLabel) {
		setModalContent("ChatResponseComponent");
		setShowModal(true);
		let chunkList = await promptWithImage(file, problemLabel);
		let currResponse = "";
		for await (const chunk of chunkList) {
			let chunkText = chunk.text();
			/*if ("{explanation_start}" in chunkText) {
				chunkText = chunkText.split("{explanation_start}")[0];
			}*/
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

	let modalComponent;
	if (modalContent === "SelectProblemComponent") {
		modalComponent = (
			<SelectProblemComponent
				file={file}
				problems={problems}
				onCloseCallback={onClose}
				resultCallback={onSolve}
				onStartCallback={onSolveStart}
			/>
		);
	} else if (modalContent === "ChatResponseComponent") {
		modalComponent = <ChatResponseComponent response={response} />;
	}

	return (
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
					<button
						onClick={() => {
							setShowModal(false);
						}}
					>
						Back
					</button>
					{modalComponent}
				</ReactModal>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<h1>Math Problem Solver</h1>
						<Dropzone
							maxFiles={1}
							onDrop={(acceptedFile) => handleChange(acceptedFile)}
						>
							{({getRootProps, getInputProps}) => (
								<section>
									<div
										style={{
											width: "500px",
											borderColor: "#535353",
											borderStyle: "dashed",
											backgroundColor: "#313338",
											borderRadius: "10px",
										}}
										{...getRootProps()}
									>
										<input {...getInputProps()} />
										<p style={{color: "#818181", margin: "5%"}}>
											Drop or select any image with math problems here
										</p>
									</div>
								</section>
							)}
						</Dropzone>
					</div>
					<CustomButtonComponent
						style={styles.solveButton}
						hoverStyle={{...styles.solveButton, backgroundColor: "#535353"}}
						onClick={() => {
							if (file !== undefined) {
								checkProblemLabels(file).then((problems) => {
									setProblems(problems);
									setModalContent("SelectProblemComponent");
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
					</CustomButtonComponent>
					{file ? (
						<div>
							<img src={URL.createObjectURL(file)} alt={file.name} height="500px" />
						</div>
					) : (
						<p style={{color: "white", fontFamily: "sans-serif"}}>No file selected</p>
					)}
				</div>
			</header>
		</div>
	);
}

export default App;

const styles = {
	solveButton: {
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
	},
};

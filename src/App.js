import logo from "./logo.svg";
import "./App.css";
import {checkProblemLabels, promptWithImage} from "./AI";
import {useEffect, useState} from "react";
import {SelectProblemComponent} from "./components/SelectProblem";
import ReactModal from "react-modal";
import {MathJax, MathJaxContext} from "better-react-mathjax";

function App() {
	const [file, setFile] = useState();
	const [selectedProblem, setSelectedProblem] = useState(-1);
	const [problems, setProblems] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [response, setResponse] = useState("");

	useEffect(() => {
		ReactModal.setAppElement("#appElement");
	}, []);

	function handleChange(event) {
		setFile(event.target.files[0]);
	}

	async function onSolve(problemLabel) {
		console.log("On solve result:");
		console.log(problemLabel);
		let chunkList = await promptWithImage(file, problemLabel);
		console.log(chunkList);
		for (chunk in chunkList) {
			console.log(chunk);
		}
		//setResponse(result);
		//setShowModal(false);
	}

	function onSolveStart() {
		setResponse("Generating response...");
		setShowModal(false);
	}

	function onClose() {
		setShowModal(false);
	}

	return (
		<MathJaxContext>
			<div id="appElement" className="App">
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
					<img src={logo} className="App-logo" alt="logo" />
					<input type="file" onChange={handleChange} />
					<button
						onClick={() => {
							checkProblemLabels(file).then((problems) => {
								setProblems(problems);
								setShowModal(true);
							});
						}}
					>
						Generate Content
					</button>
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<MathJax>{response}</MathJax>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		</MathJaxContext>
	);
}

export default App;

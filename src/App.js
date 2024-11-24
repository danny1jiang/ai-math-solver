"use client";

import logo from "./logo.svg";
import "./App.css";
import {checkProblemLabels, promptWithImage} from "./AI";
import {useState} from "react";
import {SelectProblemComponent} from "./pages/SelectProblem";
import Modal from "react-modal";

Modal.setAppElement("#appElement");

function App() {
	const [file, setFile] = useState();
	const [problems, setProblems] = useState([]);

	function handleChange(event) {
		setFile(event.target.files[0]);
	}

	return (
		<div id="appElement" className="App">
			<header className="App-header">
				<Modal isOpen={false}>
					<SelectProblemComponent problems={problems} />
				</Modal>
				<img src={logo} className="App-logo" alt="logo" />
				<input type="file" onChange={handleChange} />
				<button
					onClick={() => {
						checkProblemLabels(file).then((problems) => {
							setProblems(problems);
						});
					}}
				>
					Generate Content
				</button>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
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
	);
}

export default App;

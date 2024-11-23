"use client";

import logo from "./logo.svg";
import "./App.css";
import {promptWithImage} from "./AI";
import {useState} from "react";

function App() {
	const [file, setFile] = useState();

	function handleChange(event) {
		setFile(event.target.files[0]);
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<input type="file" onChange={handleChange} />
				<button
					onClick={() => {
						promptWithImage(file);
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

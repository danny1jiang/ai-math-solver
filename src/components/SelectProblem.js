import {promptWithImage} from "../AI";
import {CustomButtonComponent} from "./CustomButton";

export function SelectProblemComponent({
	file,
	problems,
	resultCallback,
	onStartCallback,
	onCloseCallback,
}) {
	if (problems === undefined) {
		return null;
	}

	console.log(problems);

	let problemComponents = [];
	for (let i = 0; i < problems.length; i++) {
		problemComponents.push(
			<ProblemComponent
				key={i}
				file={file}
				problemLabel={problems[i]}
				onStartCallback={onStartCallback}
				resultCallback={resultCallback}
			/>
		);
	}

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				color: "white",
				fontFamily: "sans-serif",
				fontSize: 25,
				maxWidth: "100%",
				height: "100%",
				padding: "5%",
			}}
		>
			<h1 style={{margin: 0}}>Select a Problem</h1>
			<div
				style={{
					width: "90%",
					marginTop: "3%",
					marginBottom: "4%",
					height: "1.5px",
					borderRadius: "10px",
					backgroundColor: "white",
				}}
			/>
			<div style={styles.container}>{problemComponents}</div>
		</div>
	);
}

function ProblemComponent({file, problemLabel, resultCallback, onStartCallback}) {
	return (
		<CustomButtonComponent
			onClick={() => {
				onStartCallback();
				resultCallback(problemLabel);
				/*promptWithImage(file, problemLabel).then((result) => {
					resultCallback(result);
				});*/
			}}
			style={styles.problemLabelBox}
			hoverStyle={{...styles.problemLabelBox, backgroundColor: "#4e4e4e"}}
		>
			<h1 style={{color: "white", margin: 0, fontSize: 40}}>{problemLabel}</h1>
		</CustomButtonComponent>
	);
}

const styles = {
	container: {
		width: "100%",
		display: "grid",
		justifyItems: "center",
		gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
		overflow: "hidden",
	},
	problemLabelBox: {
		width: "70%",
		aspectRatio: 1,
		marginBottom: "25%",
		//backgroundColor: "#939393",
		backgroundColor: "rgba(0,0,0,0)",
		borderColor: "white",
		borderStyle: "solid",
		borderWidth: "1.5px",
		borderRadius: "10px",
	},
};

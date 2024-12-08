import {promptWithImage} from "../AI";

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
		<div style={{backgroundColor: "#777777", maxWidth: "100%", height: "100%"}}>
			<div style={styles.container}>{problemComponents}</div>
		</div>
	);
}

function ProblemComponent({file, problemLabel, resultCallback, onStartCallback}) {
	return (
		<button
			onClick={() => {
				onStartCallback();
				resultCallback(problemLabel);
				/*promptWithImage(file, problemLabel).then((result) => {
					resultCallback(result);
				});*/
			}}
			style={styles.problemLabelBox}
		>
			<h1>{problemLabel}</h1>
		</button>
	);
}

const styles = {
	container: {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		gap: "5%",
		//paddingLeft: "5%",
		backgroundColor: "white",
		alignItems: "space-evenly",
		justifyContent: "flex-start",
		overflow: "hidden",
	},
	problemLabelBox: {
		width: "14%",
		aspectRatio: 1,
		backgroundColor: "#939393",
		border: "none",
	},
};

export function SelectProblemComponent({problems}) {
	if (problems === undefined) {
		return null;
	}

	console.log(problems);

	let problemComponents = [];
	for (let i = 0; i < problems.length; i++) {
		problemComponents.push(<ProblemComponent key={i} problemLabel={problems[i]} />);
	}

	return <div style={styles.container}>{problemComponents}</div>;
}

function ProblemComponent({problemLabel}) {
	return (
		<div style={styles.problemLabelBox}>
			<h1>{problemLabel}</h1>
		</div>
	);
}

const styles = {
	container: {
		flex: 1,
		flexDirection: "row",
		width: "100%",
		backgroundColor: "#ffffff",
		alignItems: "center",
		justifyContent: "center",
	},
	problemLabelBox: {
		width: "30%",
		height: "30%",
		backgroundColor: "#939393",
	},
};

import {useState} from "react";

export function CustomButtonComponent({style, hoverStyle, onClick, children}) {
	const [hover, setHover] = useState(false);
	const [clicked, setClicked] = useState(false);

	let finalStyle = style;
	if (hover) {
		finalStyle = hoverStyle;
	}
	if (clicked) {
		finalStyle = {...hoverStyle, opacity: 0.5};
	}

	return (
		<button
			style={finalStyle}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => {
				setHover(false);
				setClicked(false);
			}}
			onMouseDown={() => setClicked(true)}
			onMouseUp={() => setClicked(false)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

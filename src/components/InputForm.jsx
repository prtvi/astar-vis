import React from 'react';

const [minSize, maxSize, stepSize] = [10, 25, 1];
const [minSpeed, maxSpeed, stepSpeed] = [50, 500, 50];

export default function InputForm(props) {
	const { updateGridOnInput, setGridSize, startVis, setSpeed, ifRunning } =
		props;

	const [inputGridSize, setInputGridSize] = React.useState(minSize);
	const [inputSpeed, setInputSpeed] = React.useState(minSpeed * 4);

	const updateGridEL = function (e) {
		const newGridSize = Math.max(minSize, Math.min(maxSize, +e.target.value));

		setInputGridSize(newGridSize);
		setGridSize(newGridSize);

		updateGridOnInput(newGridSize);
	};

	const updateSpeedEL = function (e) {
		setSpeed(+e.target.value);
		setInputSpeed(+e.target.value);
	};

	const btnStart = async () => await startVis();

	const btnReload = () => window.location.reload();

	return (
		<div className="input-form">
			<div className="form-item">
				<p>
					Click on the boxes to start adding the start, end and barrier nodes
				</p>
			</div>

			<div className="form-item">
				<label>Enter the maze size:</label>
				<input
					type="number"
					step={stepSize}
					min={minSize}
					max={maxSize}
					onChange={updateGridEL}
					disabled={ifRunning ? true : false}
				/>
				<span>
					{inputGridSize} × {inputGridSize}
				</span>
			</div>

			<div className="form-item">
				<label>Speed:</label>
				<input
					type="range"
					step={stepSpeed}
					min={minSpeed}
					max={maxSpeed}
					onChange={updateSpeedEL}
					value={inputSpeed}
					disabled={ifRunning ? true : false}
				/>
				<span>{inputSpeed} ms</span>
			</div>

			<div className="form-item">
				<button
					className="btn"
					onClick={btnStart}
					disabled={ifRunning ? true : false}
				>
					Start
				</button>

				<button className="btn" onClick={btnReload}>
					Reload
				</button>
			</div>
		</div>
	);
}

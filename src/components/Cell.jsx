import React from 'react';

export const COLOR_RESET = '#ffffff'; //    white     0
export const COLOR_BARRIER = '#964b00'; //  brown     1
export const COLOR_CLOSED = '#f05454'; //   red       2
export const COLOR_OPEN = '#3ccf4e'; //     green     3
export const COLOR_PATH = '#3cc4fe'; //     blue      4
export const COLOR_START = '#ffa500'; //    orange    5
export const COLOR_END = '#ffff00'; //      yellow    9

export default function Cell(props) {
	const { x, y, state, cellSize, cellsClicked, updateGridOnClick } = props;

	const getCellStyle = function () {
		switch (state) {
			case 0: // reset
				return {
					backgroundColor: COLOR_RESET,
					width: cellSize,
					height: cellSize,
				};

			case 1: // barrier
				return {
					backgroundColor: COLOR_BARRIER,
					border: `1px solid ${COLOR_BARRIER}`,
					width: cellSize,
					height: cellSize,
				};

			case 2: // closed
				return {
					backgroundColor: COLOR_CLOSED,
					border: `1px solid ${COLOR_CLOSED}`,
					width: cellSize,
					height: cellSize,
				};

			case 3: // open
				return {
					backgroundColor: COLOR_OPEN,
					border: `1px solid ${COLOR_OPEN}`,
					width: cellSize,
					height: cellSize,
				};

			case 4: // path
				return {
					backgroundColor: COLOR_PATH,
					border: `1px solid ${COLOR_PATH}`,
					width: cellSize,
					height: cellSize,
				};

			case 5: // start
				return {
					backgroundColor: COLOR_START,
					border: `1px solid ${COLOR_START}`,
					width: cellSize,
					height: cellSize,
				};

			case 9: // end
				return {
					backgroundColor: COLOR_END,
					border: `1px solid ${COLOR_END}`,
					width: cellSize,
					height: cellSize,
				};

			default:
				return {
					backgroundColor: COLOR_RESET,
					width: cellSize,
					height: cellSize,
				};
		}
	};

	const cellClickEL = () => updateGridOnClick(x, y);

	const cellHoverEL = function (e) {
		const targetCL = e.target.classList;

		if (cellsClicked === 0) {
			targetCL.remove('end');
			targetCL.remove('barrier');

			targetCL.add('start');
		} else if (cellsClicked === 1) {
			targetCL.remove('start');
			targetCL.remove('barrier');

			targetCL.add('end');
		} else if (cellsClicked >= 2) {
			targetCL.remove('start');
			targetCL.remove('end');

			targetCL.add('barrier');
		}
	};

	return (
		<div
			className="cell"
			style={getCellStyle()}
			onClick={cellClickEL}
			onMouseOver={cellHoverEL}
		></div>
	);
}

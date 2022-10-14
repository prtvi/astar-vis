import React from 'react';

const COLOR_RESET = '#ffffff'; //    white     0
const COLOR_BARRIER = '#964b00'; //  brown     1
const COLOR_CLOSED = '#f05454'; //   red       2
const COLOR_OPEN = '#3ccf4e'; //     green     3
const COLOR_PATH = '#3cc4fe'; //     blue      4
const COLOR_START = '#ffa500'; //    orange    5
const COLOR_END = '#ffff00'; //      yellow    9

export default function Cell(props) {
	const { x, y, state, updateGridOnClick } = props;

	const getCellStyle = function () {
		switch (state) {
			case 0: // reset
				return {
					backgroundColor: COLOR_RESET,
				};

			case 1: // barrier
				return {
					backgroundColor: COLOR_BARRIER,
					border: `1px solid ${COLOR_BARRIER}`,
				};

			case 2: // closed
				return {
					backgroundColor: COLOR_CLOSED,
					border: `1px solid ${COLOR_CLOSED}`,
				};

			case 3: // open
				return {
					backgroundColor: COLOR_OPEN,
					border: `1px solid ${COLOR_OPEN}`,
				};

			case 4: // path
				return {
					backgroundColor: COLOR_PATH,
					border: `1px solid ${COLOR_PATH}`,
				};

			case 5: // start
				return {
					backgroundColor: COLOR_START,
					border: `1px solid ${COLOR_START}`,
				};

			case 9: // end
				return {
					backgroundColor: COLOR_END,
					border: `1px solid ${COLOR_END}`,
				};

			default:
				return {
					backgroundColor: COLOR_RESET,
				};
		}
	};

	const cellClickEL = function (e) {
		if (state === 0 || state === 1) e.target.classList.toggle('barrier');
		updateGridOnClick(x, y);
	};

	return (
		<div className="cell" style={getCellStyle()} onClick={cellClickEL}>
			<p>
				{y}, {x} ({state})
			</p>
		</div>
	);
}

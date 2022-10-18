import React from 'react';

import {
	COLOR_RESET,
	COLOR_BARRIER,
	COLOR_CLOSED,
	COLOR_OPEN,
	COLOR_PATH,
	COLOR_START,
	COLOR_END,
} from './Cell';

const legendData = [
	{
		style: { backgroundColor: COLOR_RESET },
		data: 'Reset (default unset node)',
	},
	{
		style: { backgroundColor: COLOR_START },
		data: 'Start node',
	},
	{
		style: { backgroundColor: COLOR_END },
		data: 'End node',
	},
	{
		style: { backgroundColor: COLOR_BARRIER },
		data: 'Barrier node',
	},
	{
		style: { backgroundColor: COLOR_CLOSED },
		data: 'Closed node (no more traversing will happen on this node)',
	},
	{
		style: { backgroundColor: COLOR_OPEN },
		data: 'Open node (traversing yet possible over this node)',
	},
	{
		style: { backgroundColor: COLOR_PATH },
		data: 'Path (shortest path found)',
	},
];

export default function Legend() {
	return (
		<div className="legend">
			{legendData.map((ld, i) => (
				<div className="legend-cell" key={i}>
					<div style={ld.style}></div>
					<span>{ld.data}</span>
				</div>
			))}
		</div>
	);
}

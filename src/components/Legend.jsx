import React from 'react';

const legendData = [
	{
		style: { backgroundColor: '#ffffff' },
		data: 'Reset',
	},
	{
		style: { backgroundColor: '#ffa500' },
		data: 'Start node',
	},
	{
		style: { backgroundColor: '#ffff00' },
		data: 'End node',
	},
	{
		style: { backgroundColor: '#964b00' },
		data: 'Barrier node',
	},
	{
		style: { backgroundColor: '#f05454' },
		data: 'Closed node (no more traversing will happen on this node)',
	},
	{
		style: { backgroundColor: '#3ccf4e' },
		data: 'Open node (traversing yet possible over this node)',
	},
	{
		style: { backgroundColor: '#3cc4fe' },
		data: 'Path (shortest path found)',
	},
];

export default function Legend() {
	return (
		<div className="legend">
			{legendData.map(ld => (
				<div className="legend-cell" key={ld.data}>
					<div style={ld.style}></div>
					<span>{ld.data}</span>
				</div>
			))}
		</div>
	);
}

import React from 'react';

export default function Cell(props) {
	const { pos } = props;

	return (
		<div className="cell">
			<p>{pos}</p>
		</div>
	);
}

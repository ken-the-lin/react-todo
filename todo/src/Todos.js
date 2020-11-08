import React from 'react';

function Todos(props) {
	const { todos } = props;
	return (
		<ul>
			{todos.map(todo => <li> {todo} </li>)}
		</ul>
	);
}

export default Todos;
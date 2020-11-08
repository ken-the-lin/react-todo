import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Todos from './Todos';

function App() {
	const [todos, setTodos] = useState(["laundry", "homework"])
	const [todoContent, setTodoContent] = useState('')

	const handleClick = () => { 
		const newTodo = todoContent; 
		todos.push(newTodo);
		const newTodos = [...todos];
		setTodos(newTodos);
		console.log(todos);
	}

	const onType = (event) => {
		console.log(todoContent);
		setTodoContent(event.target.value)
	}

	return (
		<div>
			<input
				type='text'
				onChange={onType}
			/> <br/>
			<Button variant="primary" onClick={handleClick}>Add</Button>
			<br/>
			<Todos todos={todos} />
		</div>
	);
}

export default App;

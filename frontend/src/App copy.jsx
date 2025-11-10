import { useState, useEffect } from 'react';
import TodoItem from "./TodoItem";

function App () {
	const LOCAL_STORAGE_KEY = "task-list";
	
	const [input, setInput] = useState("");
	const [tasks, setTasks] = useState(() => {
		const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
		return saved ? JSON.parse(saved) : [];
	});
	
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
	}, [tasks]);
	
	const addTask = () => {
		if(input.trim() === "") return;
		const newTask = {id: Date.now(), text: input, done: false };
		setTasks([...tasks, newTask]);
		setInput("");
	};
	
	const toggleDone = (id) => {
		setTasks(
			tasks.map((task) => 
				task.id === id ? {...task, done: !task.done} : task
			)
		);
	};
	
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};
	
	return (
		<div>
			<h1>Todo App</h1>
			
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Add task..."
			/>
			<button onClick={addTask}>Add</button>
			
			<ul>
				{tasks.map((task) => (
					<TodoItem
						key={task.id}
						task={task}
						toggleDone={toggleDone}
						deleteTask={deleteTask}
					/>
				))}
				</ul>
			</div>
			);
	}
	
	export default App;
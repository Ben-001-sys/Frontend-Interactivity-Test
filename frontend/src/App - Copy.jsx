import ( useState, useEffect ) from 'react';
import TodoItem from "./TodoItem";

function App() {
	LOCAL_STORAGE_KEY = 'task-list';
	
	const [input, setInput] = useState("");
	const [tasks, setTasks] = useState(() => {
		const saved = localSorage.getItem(LOCAL_STORAGE_KEY);
		return saved ? JSON.parse(saved) : [];
	)};
	
	useEffect(() => {
		localSorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
	}, [tasks]);
	
	const addTask = () => {
		if(input.trim() === "") return;
		const newTask = {id: Date.now(), text: input, done: false};
		setTasks([...tasks, newTask]);
		setInput("");
	};
	
	const toggledone = (id) =>
		
	return(
	<div>
		<h1>Todo</h1>
		
		<input
		type="text"
		value={input}
		onChange{(e)=> setInput(e.target.value)}
		placeholder="Add a task">
		
		<input 
		type="text"
		value="title"
		onChange={(e)=setTitle(e.target.value)}
		placeholder="add a title">
		
		<button onClick={addTask}>Add</button>
		
		<ul>
		{tasks.map((
	</div>)
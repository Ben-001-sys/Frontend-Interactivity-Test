function TodoItem({ task, toggleDone, deleteTask }) {
	return (
		<li> 
			<span style={{ textDecoration: task.done ? "line-through" : "none"}}>
				{task.text}
			</span>
			
			<button onClick={() => toggleDone(task.id)}>
				{task.done ? "Undo" : "Done"}
			</button>
			
			<button onClick={() => deleteTask(task.id)}>Delete</button>
		</li>
	);
}

export default TodoItem
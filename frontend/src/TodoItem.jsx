function TodoItem({ task, toggleDone, deleteTask }) {
  return (
    <li
      style={{
        margin: "8px 0",        
        padding: "8px",           
        borderRadius: "5px", 
		color: "black",    
        backgroundColor: "#f9f9f9", 
        display: "flex",         
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
        {task.text}
      </span>

      <div>
        <button
          onClick={() => toggleDone(task.id)}
          style={{ marginRight: "5px", padding: "4px 8px" }}
        >
          {task.done ? "Undo" : "Done"}
        </button>

        <button style={{ padding: "4px 8px" }} onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;

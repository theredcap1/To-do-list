import {useState} from "react";

function ToDoList() {
    const [List, setList] = useState([]);
    const [newTask, setNewTask] = useState("");
    function addNewTask() {
        if (newTask.trim() !== ""){
            setList(L => [...L, newTask]);
            setNewTask("");
        }
    }
    function handleChange(event) {
        setNewTask(event.target.value);
    }
    function deleteTask(index) {
        const newList = List.filter((_, i) => i !== index)
        setList(newList);
    }
    return(
        <div>
            <h1>To-Do List</h1>
            <input type="text" placeholder="Enter a task" onChange={handleChange} style={{marginBottom: '5%'}} value={newTask}/>
            <button onClick={(newTask) => addNewTask(newTask)}>Add</button>
            <ul>
                {List.map((newTask, index)  =>
                    <li key={index}>
                        {newTask}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    );
}
export default ToDoList
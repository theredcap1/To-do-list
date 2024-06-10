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

    function moveUp(index) {
        if(index > 0 && index < List.length){
            const updatedList = [...List];
            [updatedList[index - 1], updatedList[index]] = [updatedList[index], updatedList[index - 1]];
            setList(updatedList);
        }
    }

    function moveDown(index) {
        if(index >= 0 && index < List.length -1){
            const updatedList = [...List];
            [updatedList[index + 1], updatedList[index]] = [updatedList[index], updatedList[index + 1]];
            setList(updatedList);
        }
    }

    return(
        <div>
            <h1>To-Do List</h1>
            <input type="text" placeholder="Enter a task" onChange={handleChange} style={{marginBottom: '5%'}} value={newTask}/>
            <button className="add" onClick={(newTask) => addNewTask(newTask)}>Add</button>
            <ul>
                {List.map((newTask, index)  =>
                    <li key={index} className="Task">
                        {newTask}
                        <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="moveup" onClick={() => moveUp(index)}>Up</button>
                        <button className="movedown" onClick={() => moveDown(index)}>Down</button>
                    </li>
                )}
            </ul>
        </div>
    );
}
export default ToDoList
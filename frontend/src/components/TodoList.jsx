import { useEffect } from "react"
import axiosInstance from "../helpers/axioshelper";




const TodoList=({todos,fetchTodo,selectedTodo,setSelectedTodo})=>{



    const toggleTask = async (todo) => {
        try {
            await axiosInstance.put(`/tasks/${todo._id}`, {
                complete: !todo.complete,
            });

            fetchTodo();
            if (!todo.complete)
                alert("✅ Task marked as Completed");
            else
                alert("🔄 Task marked as Pending");
        } 
        catch (error) {
            alert("❌ Failed to update task");
            console.log("Error while toggle todo: ",error);
        }
    };


    const deleteTask = async (id) => {
        try {
            await axiosInstance.delete(`/tasks/${id}`);

            fetchTodo();
            alert("🗑️ Task deleted successfully");
        } 
        catch (error) {
            alert("❌ Failed to delete task");
            console.log("Error while deleting task: ",error);
        }
    };

    useEffect(()=>{
        if(selectedTodo)
        {
            const updatedTodo=todos.find((todo)=>todo._id===selectedTodo._id)
            if(updatedTodo?.complete!==selectedTodo.complete)
                setSelectedTodo(updatedTodo)
        }
    },[todos,selectedTodo])

    return(
        <ul className="p-4">
            {todos.map((todo)=>(
                <li 
                    key={todo._id} 
                    className="flex flex-col md:flex-row items-center md:justify-between m-auto mt-5 mb-5 rounded-md w-full md:w-2/3 border-2 p-3"
                    >
                    {/* Checkbox + Text always in a row */}
                    <div className="flex items-center w-full md:flex-1">
                        <input
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() => toggleTask(todo)}
                        className="mr-4 transform scale-125 accent-green-500"
                        />
                        <div 
                            className={`w-full flex-1 text-black text-center p-3 text-lg font-semibold rounded-lg 
                            ${todo.complete ? "bg-[#c6e9a7] line-through" : "bg-[#ccbed7]"}`}
                        >
                        {todo.text}
                        </div>
                    </div>

                    {/* Buttons row on md+, stacked & centered below on mobile */}
                    <div className="flex flex-wrap gap-3 mt-3 md:mt-0 md:ml-4 justify-center md:justify-start">
                        <button
                        onClick={() => setSelectedTodo(todo)}
                        disabled={todo.complete}
                        className={`bg-green-300 hover:bg-green-500 px-2 text-2xl rounded-md border border-black 
                            ${todo.complete ? "cursor-not-allowed" : "cursor-pointer"}`}
                        >
                            Edit
                        </button>
                        <button
                        onClick={() => deleteTask(todo._id)}
                        disabled={todo.complete}
                        className={`bg-red-500 hover:bg-red-600 px-2 text-2xl rounded-md border border-black 
                            ${todo.complete ? "cursor-not-allowed" : "cursor-pointer"}`}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}





export default TodoList;
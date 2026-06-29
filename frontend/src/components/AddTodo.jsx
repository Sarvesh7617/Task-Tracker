import { useEffect, useState } from "react"
import axiosInstance from "../helpers/axioshelper";




const AddTodo=({fetchTodo,selectedTodo,setSelectedTodo})=>{

    const [input,setInput]=useState("");


    const addSubmitHandler=async(e)=>{
        e.preventDefault()

        if (!input.trim())
            return;

        
        try {
            if(selectedTodo)
            {
                await axiosInstance.put(`/tasks/${selectedTodo._id}`,{
                    text:input
                }) 
                alert("✏️ Task updated successfully");
            }
            else
            {
                await axiosInstance.post("/tasks",{
                    text:input
                })
                alert("✅ Task added successfully");
            }
            setInput("");
            setSelectedTodo(null);
            fetchTodo();
        } 
        catch (error) {
            alert("❌ Something went wrong");
            console.log("Error while creating todo: ",error)
        }
    }


    useEffect(()=>{
        if(selectedTodo)
          setInput(selectedTodo.text)
        else
            setInput("");
    },[selectedTodo])


    return(
        <form onSubmit={addSubmitHandler} className="flex m-auto w-1/2">
            <input 
                type="text"
                value={input}
                placeholder="Write todo here......"
                onChange={(e)=>setInput(e.target.value)}
                className="p-2 border-2 text-black rounded-l-xl text-lg w-full"
            />
            <button
                type="Submit"
                className={`bg-green-400 p-3 rounded-r-lg font-bold text-md cursor-pointer transition-transform hover:scale-110 hover:bg-green-600 duration-300 ease-linear border-2 border-black ${selectedTodo?.complete?"cursor-not-allowed blur-sm":""}`}
                disabled={selectedTodo?.complete}
            >{selectedTodo?"UPDATE":"ADD"}</button>
        </form>
    )
}





export default AddTodo;
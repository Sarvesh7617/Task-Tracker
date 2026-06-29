import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import axiosInstance from "./helpers/axioshelper";



function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const fetchTodos = async () => {
    try {
      const res = await axiosInstance.get("/tasks");
      setTodos(res.data.data);
    } 
    catch (error) {
      console.log("Error while fetching todo: ",error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <h1 className="text-white bg-gradient-to-r from-violet-400 to-orange-500 w-1/2 m-auto text-center rounded-lg text-5xl mt-5 mb-5 p-2">
        Task Tracker
      </h1>

      <AddTodo
        fetchTodo={fetchTodos}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
      />

      <TodoList
        todos={todos}
        fetchTodo={fetchTodos}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
      />
    </>
  );
}

export default App;
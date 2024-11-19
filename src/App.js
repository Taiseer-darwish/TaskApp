import "./App.css";
import ToDoList from "./components/Todolist";
import { TodoContext } from "./Contexts/TodoContext";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


const initialToDo = [
  {
    id: uuidv4(),
    content: "-",
    isEditing: true,
    isCompleted: false,
  },
  {
    id: uuidv4(),
    content: "-",
    isEditing: true,
    isCompleted: false,
  },
  {
    id: uuidv4(),
    content: "-",
    isEditing: true,
    isCompleted: false,
  },
];

function App() {
  const [todos, settodos] = useState(initialToDo);
  return <>
 <div className=" bg-[#161618] min-h-screen relative">
  <TodoContext.Provider value={{todos:todos , settodos:settodos}}>
  <ToDoList/>
  </TodoContext.Provider>
 </div>
  </>;
}

export default App;

import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
const App = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <Header />
      <Todo
        setInputTask={setInputTask}
        inputTask={inputTask}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
};
export default App;

import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Task from "./Task";
import s from "./Todo.module.css";
const Todo = (props) => {
  const inputTaskHandler = (event) => {
    props.setInputTask(event.target.value);
  };
  const addTask = (event) => {
    event.preventDefault();
    if (props.inputTask.replace(/[\s.,%]/g, "") !== "") {
      props.setTasks([
        ...props.tasks,
        {
          text: props.inputTask,
          id: Math.random() * 1000,
          completed: false
        },
      ]);
      props.setInputTask("");
    }
  };
  return (
    <div>
      <div className={s.todoFormContainer}>
        <h1 className={s.appName}>Todo list</h1>
        <form className={s.todoForm}>
          <input
            value={props.inputTask}
            onChange={inputTaskHandler}
            type="text"
            className={s.inputTask}
          />
          <button onClick={addTask} type="submit" className={s.addTask}>
            <IconContext.Provider value={{ className: s.addBtnIcon }}>
              <AiOutlinePlusCircle />
            </IconContext.Provider>
          </button>
        </form>
      </div>
      <div className={s.todoList}>
        {props.tasks.map((task) => (
          <Task
            setTasks={props.setTasks}
            tasks={props.tasks}
            task={task}
            key={task.id}
            taskName={task.text}
            completed={task.completed}
          />
        ))}
      </div>
    </div>
  );
};
export default Todo;

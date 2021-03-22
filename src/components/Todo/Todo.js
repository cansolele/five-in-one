import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Task from "./Task";
import "./Todo.css";
const Todo = (props) => {
  const inputTaskHandler = (event) => {
    props.setInputTask(event.target.value);
  };
  const addTask= (event) => {
    event.preventDefault();
    if (props.inputTask.replace(/[\s.,%]/g, '') !== "") {
    props.setTasks([
      ...props.tasks,
      { text: props.inputTask, id: Math.random() * 1000 },
    ]);
    props.setInputTask("");
}
  };
  return (
    <div>
      <div className="todoFormContainer">
        <form className="todoForm">
          <input
            value={props.inputTask}
            onChange={inputTaskHandler}
            type="text"
            className="inputTask"
          />
          <button onClick={addTask} type="submit" className="addTask">
            <IconContext.Provider value={{ className: "addBtnIcon" }}>
              <AiOutlinePlusCircle />
            </IconContext.Provider>
          </button>
        </form>
      </div>
      <div className="todoList">
          {
              props.tasks.map(task =>(
                  <Task setTasks={props.setTasks} tasks={props.tasks} task={task} key={task.id} taskName={task.text}/>
              ))
          }
      </div>
    </div>
  );
};
export default Todo;

import { IconContext } from "react-icons";
import { AiOutlineCheck, AiFillDelete } from "react-icons/ai";
import "./Task.css";
const Task = (props) => {
  const removeTask = () => {
    props.setTasks(props.tasks.filter((e) => e.id !== props.task.id));
  };
  const completeTask = () => {
    props.setTasks(
      props.tasks.map((e) => {
        if (e.id === props.task.id) {
          return {
            ...e,
            completed: !e.completed,
          };
        }
        return e;
      })
    );
  };
  return (
    <div className="task">
      <div
        className={`taskName ${props.task.completed ? "taskCompleted" : ""}`}
      >
        {props.taskName}
      </div>
      <button onClick={completeTask} className="cdTask">
        <IconContext.Provider value={{ className: "cdBtnIcon" }}>
          <AiOutlineCheck />
        </IconContext.Provider>
      </button>
      <button onClick={removeTask} className="cdTask">
        <IconContext.Provider value={{ className: "cdBtnIcon" }}>
          <AiFillDelete />
        </IconContext.Provider>
      </button>
    </div>
  );
};
export default Task;

import { IconContext } from "react-icons";
import { AiOutlineCheck, AiFillDelete } from "react-icons/ai";
import s from"./Task.module.css";
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
    <div className={s.task}>
      <div
        className={`${s.taskName} ${props.task.completed ? s.taskCompleted : ""}`}
      >
        {props.taskName}
      </div>
      <button onClick={completeTask} className={s.cdTask}>
        <IconContext.Provider value={{ className: s.cdBtnIcon }}>
          <AiOutlineCheck />
        </IconContext.Provider>
      </button>
      <button onClick={removeTask} className={s.cdTask}>
        <IconContext.Provider value={{ className: s.cdBtnIcon }}>
          <AiFillDelete />
        </IconContext.Provider>
      </button>
    </div>
  );
};
export default Task;

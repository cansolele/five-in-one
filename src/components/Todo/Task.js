import { IconContext } from "react-icons";
import {
    AiOutlineCheck,
    AiFillDelete,
  } from "react-icons/ai";
import './Task.css'
const Task = (props) => {
  return (
    <div className="task">
      <div className="taskName">{props.task}</div>
      <button className="cdTask">
        <IconContext.Provider value={{ className: "cdBtnIcon" }}>
          <AiOutlineCheck />
        </IconContext.Provider>
      </button>
      <button className="cdTask">
        <IconContext.Provider value={{ className: "cdBtnIcon" }}>
          <AiFillDelete />
        </IconContext.Provider>
      </button>
    </div>
  );
};
export default Task;

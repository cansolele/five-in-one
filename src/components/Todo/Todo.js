import { IconContext } from "react-icons";
import { AiOutlinePlusCircle, AiOutlineCheck, AiFillDelete} from "react-icons/ai";
import './Todo.css'
const Todo = () => {
    return (
        <div>
            <div className="todoFormContainer">
                <form className="todoForm">
                    <input type="text" className="inputTask" />
                    <button type="submit" className="addTask">
                        <IconContext.Provider value={{ className: "addBtnIcon" }}>
                            <AiOutlinePlusCircle />
                        </IconContext.Provider>
                    </button>
                </form>
            </div>
            <div className="todoList">
                <div className="task">
                    <div className="taskName">Тест 1</div>
                    <button className="cdTask"><IconContext.Provider value={{ className: "cdBtnIcon" }}>
                        <AiOutlineCheck />
                    </IconContext.Provider></button>
                    <button className="cdTask"><IconContext.Provider value={{ className: "cdBtnIcon" }}>
                        <AiFillDelete />
                    </IconContext.Provider></button>
                </div>
                <div className="task">
                    <div className="taskName">Тест 2</div>
                    <button className="cdTask"><IconContext.Provider value={{ className: "cdBtnIcon" }}>
                        <AiOutlineCheck />
                    </IconContext.Provider></button>
                    <button className="cdTask"><IconContext.Provider value={{ className: "cdBtnIcon" }}>
                        <AiFillDelete />
                    </IconContext.Provider></button>
                </div>
            </div>
        </div>
    )
}
export default Todo;
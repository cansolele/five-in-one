import s from "./ExpenseTracker.module.css";
import { IconContext } from "react-icons";
import { ImPlus } from "react-icons/im";
const ExpenseTracker = () => {
  return (
    <div>
      <div className={s.ETFormContainer}>
        <h1 className={s.appName}>Expense Tracker</h1>
        <form className={s.etForm}>
          <div className={s.inputContainer}>
            <p>Name:</p>
            <input type="text" className={s.input} />
          </div>
          <div className={s.inputContainer}>
            <p>Price:</p>
            <input type="text" className={s.input} />
          </div>
          <div className={s.inputContainer}>
            <p>Date:</p>
            <input type="date" className={s.input} />
          </div>
          <button type="submit" className={s.addItem}>
            <IconContext.Provider value={{ className: s.addBtnIcon }}>
              <ImPlus />
            </IconContext.Provider>
          </button>
        </form>
      </div>
    </div>
  );
};
export default ExpenseTracker;

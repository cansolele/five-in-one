import s from "./ExpenseTracker.module.css";
import { IconContext } from "react-icons";
import { ImPlus } from "react-icons/im";

const ExpenseTracker = (props) => {
  const inputExpensNameHandler = (event) => {
    props.setInputExpensName(event.target.value);
  };
  const inputExpensPriceHandler = (event) => {
    props.setInputExpensPrice(event.target.value);
  };
  const inputExpensDateHandler = (event) => {
    props.setInputExpensDate(event.target.value);
  };

  const addExpens = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className={s.ETFormContainer}>
        <h1 className={s.appName}>Expense Tracker</h1>
        <form className={s.etForm}>
          <div className={s.inputContainer}>
            <p>Name:</p>
            <input
              type="text"
              value={props.inputExpensName}
              onChange={inputExpensNameHandler}
              className={s.input}
            />
          </div>
          <div className={s.inputContainer}>
            <p>Price:</p>
            <input
              type="number"
              value={props.inputExpensPrice}
              onChange={inputExpensPriceHandler}
              className={s.input}
            />
          </div>
          <div className={s.inputContainer}>
            <p>Date:</p>
            <input
              type="date"
              value={props.inputExpensDate}
              onChange={inputExpensDateHandler}
              className={s.input}
            />
          </div>
          <button onClick={addExpens} type="submit" className={s.addExpens}>
            <IconContext.Provider value={{ className: s.addBtnIcon }}>
              <ImPlus />
            </IconContext.Provider>
          </button>
        </form>
      </div>
      <div className={s.expensList}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Phone</td>
              <td>20$</td>
              <td>20.02.2001</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ExpenseTracker;

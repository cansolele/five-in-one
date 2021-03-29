import s from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className={s.nav}>
        <Link to="/Todo">ToDo</Link>
        <Link to="/ExpenseTracker">Expense Tracker</Link>
        <Link to="/NoteTaker">Note Taker</Link>
        <Link to="/VowelCounter">Vowel Counter</Link>
        <Link to="/MemoryGame">Memory Game</Link>
      </nav>
    </header>
  );
};
export default Header;

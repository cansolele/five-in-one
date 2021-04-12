import s from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className={s.nav}>
        <Link to="/todo">ToDo</Link>
        <Link to="/expense-tracker">Expense Tracker</Link>
        <Link to="/note-taker">Note Taker</Link>
        <Link to="/vowel-counter">Vowel Counter</Link>
        <Link to="/memory-game">Memory Game</Link>
      </nav>
    </header>
  );
};
export default Header;

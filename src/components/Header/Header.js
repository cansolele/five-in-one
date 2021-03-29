import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/Todo">ToDo</Link>
        <Link to="/ExpenseTracker">Expense Tracker</Link>
        <Link to="">Note Taker</Link>
        <Link to="">Vowel Counter</Link>
        <Link to="">Memory Game</Link>
      </nav>
    </header>
  );
};
export default Header;

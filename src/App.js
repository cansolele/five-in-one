import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
const App = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [inputExpensName, setInputExpensName] = useState("");
  const [inputExpensPrice, setInputExpensPrice] = useState("");
  const [inputExpensDate, setInputExpensDate] = useState("");
  const [Expens, setExpens] = useState([]);
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/Todo">
            <Todo
              setInputTask={setInputTask}
              inputTask={inputTask}
              tasks={tasks}
              setTasks={setTasks}
            />
          </Route>
          <Route exact path="/ExpenseTracker">
            <ExpenseTracker
              inputExpensName={inputExpensName}
              setInputExpensName={setInputExpensName}
              inputExpensPrice={inputExpensPrice}
              setInputExpensPrice={setInputExpensPrice}
              inputExpensDate={inputExpensDate}
              setInputExpensDate={setInputExpensDate}
              Expens={Expens}
              setExpens={setExpens}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;

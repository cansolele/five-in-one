import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import NoteTaker from "./components/NoteTaker/NoteTaker";
const App = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [inputExpensName, setInputExpensName] = useState("");
  const [inputExpensPrice, setInputExpensPrice] = useState("");
  const [inputExpensDate, setInputExpensDate] = useState("");
  const [expens, setExpens] = useState([]);
  const [inputNote, setInputNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [modalWindow, setModalWindow] = useState([]);
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/todo">
            <Todo
              setInputTask={setInputTask}
              inputTask={inputTask}
              tasks={tasks}
              setTasks={setTasks}
            />
          </Route>
          <Route exact path="/expense-tracker">
            <ExpenseTracker
              inputExpensName={inputExpensName}
              setInputExpensName={setInputExpensName}
              inputExpensPrice={inputExpensPrice}
              setInputExpensPrice={setInputExpensPrice}
              inputExpensDate={inputExpensDate}
              setInputExpensDate={setInputExpensDate}
              expens={expens}
              setExpens={setExpens}
            />
          </Route>
          <Route exact path="/note-taker">
            <NoteTaker
              inputNote={inputNote}
              setInputNote={setInputNote}
              notes={notes}
              setNotes={setNotes}
              modalWindow={modalWindow}
              setModalWindow={setModalWindow}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;

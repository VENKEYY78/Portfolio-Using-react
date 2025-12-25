import BackButton from "../../backButton.";

import "./index.css";

const TodoList = () => (
  <div className="Todolist-main-bg-container">
    <div className="todo-card-header">
      <h1 className="heading">Todolist</h1>
      <p className="todo-card-description">
        Each day I will accomplish one thing on my todo list
      </p>
    </div>

    <h3 className="todo-title-heading">Read a Book</h3>
    <p className="paragragh">
      I don't think that the the human race will survive the next thousand
      years, unless we spread into space. There are too many accidents that can
      befall life on a single planet. But I'm an optimist...
    </p>
    <div className="button-container">
      <button className="button">Start</button>
      <p className="todo-bottom-text">Dont skip introduction</p>
    </div>

    <div className="back-navigate-button-container">
      <BackButton />
    </div>
  </div>
);

export default TodoList;

import "./index.css";

const TodoList = () => (
  <div className="Todolist-main-bg-container">
    <div className="todo-card-header">
      <h1 className="heading">Todolist</h1>
      <p className="para-1">
        Each day I will accomplish one thing on my todo list
      </p>
    </div>

    <h3 className="heading-3">Read a Book</h3>
    <p className="paragragh">
      I don't think that the the human race will survive the next thousand
      years, unless we spread into space. There are too many accidents that can
      befall life on a single planet. But I'm an optimist...
    </p>
    <div className="button-container">
      <button className="button">Start</button>
      <p className="para-3">Dont skip introduction</p>
    </div>
  </div>
);

export default TodoList;

import { useState } from "react";

export default function Form(props) {
  const [todo, setTodo] = useState("");

  const todoHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(todo.trim()){
        props.getData(todo);
        setTodo("")
    }
  };

  return (
    <section>
      <p className="liveTodo">Todo : {todo}</p>
      <form onSubmit={submitHandler}>
        <input
          className="inputTodo"
          placeholder="Write some things"
          type="text"
          value={todo}
          onChange={todoHandler}
        />
        <button type="submit" className="submitBTN">
          <span>Add Todo</span>
        </button>
      </form>
    </section>
  );
}

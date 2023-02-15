import { useState } from "react";
import Form from "./Components/Form";
import ShowTodoLists from "./Components/ShowTodoLists";
import uuid from "react-uuid";
import { PostData } from "./Api";

import './styles/main.css';

export default function App() {
  const [todos, setTodo] = useState([]);

  const todoHanlder = (todo) => {
    const id = uuid();
    PostData("http://localhost:3001/data", {
      todo,
      id,
    });

    setTodo([
      ...todos,
      {
        todo,
        id,
      },
    ]);
  };

  return (
    <main>
      <Form getData={todoHanlder} data="hello" />
      <ShowTodoLists todo={todos} />
    </main>
  );
}

import { useEffect, useState } from "react";
import GetData from "../Api";
import Todo from "./Todo";

export default function ShowTodoLists({ todo }) {
  const [TodoDB, setTodoDB] = useState([]);

  useEffect(() => {
    GetData("http://localhost:3001/data").then((data) => {
      setTodoDB(data);
    });
  }, []);

  const result = todo?.map((item) => (
    <Todo text={item.todo} key={item.id} id={item.id} />
  ));

  const dbResult = TodoDB?.map((item) => (
    <Todo text={item.todo} key={item.id} id={item.id} />
  ));

  return (
    <ul className="todos">
      {result}
      {dbResult}
    </ul>
  );
}

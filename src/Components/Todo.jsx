import { DeleteData } from "../Api";

export default function Todo({ text, id }) {
  const completeHandler = (e) => {
    e.target.parentElement.parentElement.classList = "complete";
  };

  const closeHandler = (e) => {
    const element = e.target.parentElement.parentElement;
    DeleteData("http://localhost:3001/data/",element.id)
    element.remove()
  };

  return (
    <li id={id}>
      {text}
      <section>
        <button onClick={completeHandler}>C</button>
        <button onClick={closeHandler}>X</button>
      </section>
    </li>
  );
}

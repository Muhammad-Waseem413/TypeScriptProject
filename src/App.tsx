import React from "react";
import "./App.css";

type formElement = React.FormEvent<HTMLFormElement>;
interface ITodo {
  text: string;
  complete: boolean;
}

function App() {
  const [value, setValue] = React.useState<string>("");
  const [todos, setTodo] = React.useState<ITodo[]>([]);

  const handleSubmit = (event: formElement): void => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string) => {
    const newTodo: ITodo[] = [...todos, { text, complete: false }];
    setTodo(newTodo);
  };

  console.log(todos);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          required
        ></input>
        <button type="submit">Add Todo</button>
      </form>
      <div>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <ul key={index}>
              <li>{todo.text}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;

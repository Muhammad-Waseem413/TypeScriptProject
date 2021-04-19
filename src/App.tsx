import React from "react";
import "./App.css";

type formElement = React.FormEvent<HTMLFormElement>;
interface ITodo {
  text: string;
  complete: boolean;
}

function App(): JSX.Element {
  const [value, setValue] = React.useState<string>("");
  const [todos, setTodo] = React.useState<ITodo[]>([]);

  const handleSubmit = (event: formElement): void => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodo: ITodo[] = [...todos, { text, complete: false }];
    setTodo(newTodo);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodo(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

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
            <div key={index}>
              <ul>
                <li>{todo.text}</li>
              </ul>
              <button type="button" onClick={() => completeTodo(index)}>
                {todo.complete ? "complete" : "incomplete"}
              </button>
              <button type="button" onClick={() => removeTodo(index)}>
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

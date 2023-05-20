import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem("todos")) {
      return JSON.parse(localStorage.getItem("todos"));
    } else {
      return [];
    }
  });

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo !== "") {
      setTodos((prevTodos) => {
        return [...prevTodos, { id: uuidv4(), value: newTodo }];
      });
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h2>Todo List</h2>
      </nav>
      <form className="addTodo" onSubmit={addTodo}>
        <div className>
          <label>Add Todo</label>
        </div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <div>
          <button type="submit">Add Todo</button>
        </div>
      </form>
      <div className="todos">
        {todos.map((todo) => {
          return (
            <div className="todoCard">
              {todo.value}
              <button
                className="delete"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

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
        return [{ id: uuidv4(), value: newTodo }, ...prevTodos];
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

  const deleteAll = () => {
    setTodos([]);
  };
  return (
    <div className="App">
      <nav className="navbar">
        <h2>Todo List</h2>
      </nav>

      <div className="main">
        <div className="form">
          <form onSubmit={addTodo}>
            <div className="label">
              <label>Add Todo</label>
            </div>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
              placeholder="Stuff"
              maxLength={40}
              autoFocus
            />
            <div>
              <button className="deleteAll" onClick={deleteAll} type="button">
                Delete All
              </button>
            </div>
          </form>
        </div>
        <div className="todos">
          {todos.map((todo) => {
            return (
              <div className="todoCard" key={todo.id}>
                <div className="value">
                  <p>{todo.value}</p>
                </div>
                <div className="delete">
                  <button
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

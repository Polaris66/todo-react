import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import Todos from "./components/Todos";
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
        return [{ id: uuidv4(), value: newTodo, done: false }, ...prevTodos];
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

  const doneTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, done: !todo.done };
      });
    });
  };

  const editTodo = (id, value) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, value };
      });
    });
  };
  return (
    <div className="App">
      <nav className="navbar">
        <h2>Todo List</h2>
      </nav>

      <div className="main">
        <Form
          addTodo={addTodo}
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          deleteAll={deleteAll}
        />
        <Todos
          todos={todos}
          deleteTodo={deleteTodo}
          doneTodo={doneTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import TodoCard from "./TodoCard";

export default function Todos({ todos, deleteTodo, doneTodo, editTodo }) {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <TodoCard
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            doneTodo={doneTodo}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
}

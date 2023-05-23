import React, { useState } from "react";

export default function TodoCard({ todo, deleteTodo, doneTodo, editTodo }) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.value);

  const doneEditing = (e) => {
    if (e.target.value == "") {
      deleteTodo(todo.id);
    }
    setEditing(false);
    editTodo(todo.id, e.target.value);
  };
  return (
    <div className={"todoCard" + (todo.done ? " done" : " left")} key={todo.id}>
      <div className="done">
        <input
          type="checkbox"
          onClick={() => {
            doneTodo(todo.id);
          }}
        />
      </div>
      <div
        className="value"
        onDoubleClick={() => {
          if (!todo.done) setEditing(true);
        }}
      >
        {editing && (
          <input
            type="text"
            autoFocus
            value={editValue}
            onChange={(e) => {
              setEditValue(e.target.value);
            }}
            onBlur={doneEditing}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                doneEditing(e);
              }
            }}
          />
        )}
        {!editing && <p>{todo.value}</p>}
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
}

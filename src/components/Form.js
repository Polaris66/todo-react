import React from "react";

export default function Form({ addTodo, newTodo, setNewTodo, deleteAll }) {
  return (
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
  );
}

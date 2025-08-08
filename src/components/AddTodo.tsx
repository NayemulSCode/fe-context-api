import React, { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className="flex-1 px-4 py-2 border rounded-l focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-r hover:bg-green-600"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;

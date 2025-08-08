import { useTodoStore } from "../../zustand/TodoZustand";

const TodoList = () => {
  console.log("todo list re render");
  const { todos, toggleTodo, deleteTodo, filter } = useTodoStore();
  const filteredTodos = todos.filter((todo) =>
    filter === "active"
      ? !todo.completed
      : filter === "completed"
      ? todo.completed
      : todo
  );

  return (
    <ul className="space-y-2">
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-2 bg-white rounded shadow"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="w-4 h-4"
          />
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.text}
          </span>
          <div className="space-x-2">
            <button
              className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              onClick={() => {
                // dispatch({ type: "TOGGLE_TODO", id: todo.id });
                toggleTodo(todo.id);
              }}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() =>
                // dispatch({ type: "DELETE_TODO", id: todo.id })
                deleteTodo(todo.id)
              }
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

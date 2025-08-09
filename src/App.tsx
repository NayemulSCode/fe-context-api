import "./App.css";
import TodoList from "./components/zustand//TodoListZustand";
import AddTodo from "./components/zustand/AddTodoZustand";
import CartApp from "./components/zustand/CartApp";
import TodoFilter from "./components/zustand/TodoFilter";

function App() {
  console.log("app re render");
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        {/* real life cart examp */}
        <CartApp />
        {/* real life todo app example */}
        <h1 className="text-3xl font-bold mb-6 text-center">Todo App</h1>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <AddTodo />
          <TodoFilter />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;

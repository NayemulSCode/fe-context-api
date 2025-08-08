import { TodoProvider } from "./contexts/TodoContext";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";
import { CounterProvider } from "./contexts/CounterContext";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

function App() {
  return (
    <>
      {/* // todo context provider */}
      <TodoProvider>
        <div className="min-h-screen bg-gray-100 p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Todo App</h1>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            <AddTodo />
            <TodoList />
          </div>
        </div>
      </TodoProvider>
{/* coutner context provider */}
      <CounterProvider>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <CounterDisplay />
          <CounterControls />
        </div>
      </CounterProvider>
      );
    </>
  );
}

export default App;

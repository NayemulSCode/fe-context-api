import React from "react";
import { useCounter } from "../contexts/CounterContext";

const CounterControls = () => {
  const { dispatch } = useCounter();

  return (
    <div className="space-x-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterControls;

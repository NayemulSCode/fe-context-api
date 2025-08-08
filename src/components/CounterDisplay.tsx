import React from "react";
import { useCounter } from "../contexts/CounterContext";

const CounterDisplay = () => {
  const { state } = useCounter();
  return <h1 className="text-4xl font-bold">Count: {state.count}</h1>;
};

export default CounterDisplay;

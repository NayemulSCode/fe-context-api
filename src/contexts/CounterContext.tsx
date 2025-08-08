/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from "react";

// State এবং Action এর টাইপ
type CounterState = { count: number };
type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" };

// Reducer ফাংশন
const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

// Context তৈরি
const CounterContext = createContext<{
  state: CounterState;
  dispatch: React.Dispatch<CounterAction>;
} | null>(null);

// Provider কম্পোনেন্ট
export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom Hook (পুনরায় ব্যবহারযোগ্য লজিক)
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context)
    throw new Error("useCounter must be used within CounterProvider");
  return context;
};

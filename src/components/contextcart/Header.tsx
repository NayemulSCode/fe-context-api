import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";

// Header Component
const Header: React.FC = () => {
  const { state, dispatch } = useCartContext();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      dispatch({ type: "SET_USER", payload: username });
      setUsername("");
    }
  };

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className={`p-4 border-b-2 ${
        state.theme === "dark"
          ? "bg-gray-800 text-white border-gray-600"
          : "bg-white text-gray-800 border-gray-200"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">🛒 Shopping Demo</h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            className={`px-3 py-1 rounded ${
              state.theme === "dark"
                ? "bg-yellow-500 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            {state.theme === "dark" ? "☀️" : "🌙"}
          </button>

          {state.user ? (
            <div className="flex items-center gap-2">
              <span>স্বাগতম, {state.user}!</span>
              <button
                onClick={() => dispatch({ type: "LOGOUT" })}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="আপনার নাম"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`px-2 py-1 border rounded ${
                  state.theme === "dark"
                    ? "bg-gray-700 border-gray-600"
                    : "bg-white border-gray-300"
                }`}
              />
              <button
                onClick={handleLogin}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Login
              </button>
            </div>
          )}

          <div className="flex items-center gap-2">
            <span>🛒 Cart: {totalItems}</span>
            <span className="font-bold">
              ৳
              {state.cart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

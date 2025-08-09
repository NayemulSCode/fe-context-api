import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";

const DebugPanel: React.FC = () => {
  const { state } = useCartContext();
  const [showDebug, setShowDebug] = useState(false);

  return (
    <div
      className={`mt-6 p-4 border rounded-lg ${
        state.theme === "dark"
          ? "bg-gray-800 border-gray-600"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <button
        onClick={() => setShowDebug(!showDebug)}
        className="mb-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        {showDebug ? "Hide" : "Show"} Debug Panel 🔍
      </button>

      {showDebug && (
        <div
          className={`p-4 rounded border ${
            state.theme === "dark"
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-300"
          }`}
        >
          <h3 className="text-lg font-bold mb-2">Current App State:</h3>
          <pre className="text-xs overflow-auto">
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};
export default DebugPanel;

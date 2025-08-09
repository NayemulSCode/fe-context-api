import { useCartContext } from "../../contexts/CartContext";

const Cart: React.FC = () => {
  const { state, dispatch } = useCartContext();

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  if (state.cart.length === 0) {
    return (
      <div
        className={`p-6 border rounded-lg ${
          state.theme === "dark"
            ? "bg-gray-700 border-gray-600"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        <p className="text-center opacity-75">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div
      className={`p-6 border rounded-lg ${
        state.theme === "dark"
          ? "bg-gray-700 border-gray-600"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <button
          onClick={clearCart}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>

      {state.cart.map((item) => (
        <div
          key={item.id}
          className={`flex justify-between items-center p-3 mb-2 border rounded ${
            state.theme === "dark"
              ? "border-gray-600 bg-gray-800"
              : "border-gray-200 bg-white"
          }`}
        >
          <div>
            <h4 className="font-medium">{item.name}</h4>
            <p className="text-sm opacity-75">৳{item.price} each</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 bg-gray-300 rounded hover:bg-gray-400 flex items-center justify-center"
            >
              -
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 bg-gray-300 rounded hover:bg-gray-400 flex items-center justify-center"
            >
              +
            </button>
            <button
              onClick={() => removeItem(item.id)}
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
            <span className="ml-4 font-bold">
              ৳{item.price * item.quantity}
            </span>
          </div>
        </div>
      ))}

      <div className="mt-4 pt-4 border-t border-gray-300">
        <div className="text-right text-xl font-bold">
          Total: ৳
          {state.cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

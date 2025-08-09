import { useCartContext, type Product } from "../../contexts/CartContext";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { state, dispatch } = useCartContext();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div
      className={`p-4 border rounded-lg shadow-md ${
        state.theme === "dark"
          ? "bg-gray-700 border-gray-600"
          : "bg-white border-gray-200"
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-sm opacity-75 mb-2">Category: {product.category}</p>
      <p className="text-xl font-bold mb-3">৳{product.price}</p>
      <button
        onClick={addToCart}
        disabled={!state.user}
        className={`w-full py-2 px-4 rounded font-medium ${
          state.user
            ? "bg-blue-500 hover:bg-blue-600 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {state.user ? "Add to Cart" : "Login Required"}
      </button>
    </div>
  );
};
export default ProductCard;

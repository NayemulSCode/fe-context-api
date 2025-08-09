import { products, useCartStore } from "../../zustand/CartStore";
import CartItem from "./CartItem";
import ProductCard from "./ProductCard";

const CartApp = () => {
  const {
    items,
    customerName,
    isDark,
    setCustomerName,
    clearCart,
    toggleTheme,
  } = useCartStore();

  // Calculate total price in component (computed value)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              🛒 Zustand Shopping Cart
            </h1>
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Customer Info */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter your name..."
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {customerName && (
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Welcome, {customerName}! 👋
              </p>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Products Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                📱 Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* Cart Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  🛒 Cart ({items.length} items)
                </h2>
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 font-medium transition-colors"
                  >
                    Clear Cart
                  </button>
                )}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                {items.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                    Your cart is empty 🛒
                  </p>
                ) : (
                  <>
                    <div className="space-y-3 mb-6">
                      {items.map((item) => (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                      <div className="flex justify-between items-center text-xl font-bold text-gray-800 dark:text-white">
                        <span>Total:</span>
                        <span className="text-green-600 dark:text-green-400">
                          ৳{totalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartApp;

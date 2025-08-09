import { useCartStore, type CartItems } from "../../zustand/CartStore";

const CartItem: React.FC<{ item: CartItems }> = ({ item }) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{item.emoji}</span>
        <div>
          <h4 className="font-medium text-gray-800 dark:text-white">
            {item.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            ৳{item.price.toLocaleString()} × {item.quantity}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center"
        >
          -
        </button>
        <span className="w-8 text-center font-medium text-gray-800 dark:text-white">
          {item.quantity}
        </span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center"
        >
          +
        </button>
        <button
          onClick={() => removeItem(item.id)}
          className="ml-2 text-red-500 hover:text-red-700"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};
export default CartItem;

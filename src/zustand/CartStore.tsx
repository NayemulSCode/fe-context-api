import { create } from "zustand";
import { persist } from "zustand/middleware";

export const products = [
  { id: 1, name: "iPhone 15", price: 120000, emoji: "📱" },
  { id: 2, name: "MacBook Pro", price: 250000, emoji: "💻" },
  { id: 3, name: "AirPods", price: 25000, emoji: "🎧" },
  { id: 4, name: "iPad", price: 80000, emoji: "📱" },
];
// Types
export type Product = {
  id: number;
  name: string;
  price: number;
  emoji: string;
};

export type CartItems = Product & {
  quantity: number;
};

export type CartStore = {
  items: CartItems[];
  customerName: string;
  isDark: boolean;
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  setCustomerName: (name: string) => void;
  clearCart: () => void;
  toggleTheme: () => void;
};

// 🛒 Simple Cart Store - TypeScript version!
export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      // State
      items: [],
      customerName: "",
      isDark: false,

      // Actions
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return { items: state.items.filter((item) => item.id !== id) };
          }
          return {
            items: state.items.map((item) =>
              item.id === id ? { ...item, quantity } : item
            ),
          };
        }),

      setCustomerName: (name) => set({ customerName: name }),

      clearCart: () => set({ items: [] }),

      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
    }),
    { name: "cart-storage" }
  )
);

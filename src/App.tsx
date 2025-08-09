import "./App.css";
import Cart from "./components/contextcart/Cart";
import DebugPanel from "./components/contextcart/DebugPanel";
import Header from "./components/contextcart/Header";
import ProductCard from "./components/contextcart/ProductCard";
import { CartProvider } from "./contexts/CartContext";
import { products } from "./demoproducts/products";

function App() {
  console.log("app re render");
  return (
    <>
      <CartProvider>
        <div className="min-h-screen">
          <Header />

          <main className="p-6 max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                Context API & Reducer Demo
              </h2>
              <p className="opacity-75 mb-4">
                এই ডেমো দেখাচ্ছে কিভাবে Context API এবং useReducer দিয়ে global
                state manage করা যায়। Login করুন, products add করুন, এবং theme
                toggle করুন।
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Products</h3>
                <div className="grid gap-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
              <div>
                <Cart />
              </div>
            </div>
            <DebugPanel />
          </main>
        </div>
      </CartProvider>
    </>
  );
}

export default App;

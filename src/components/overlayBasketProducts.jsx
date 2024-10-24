import { Trash } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export function OverlayBasketProducts() {
  const { basket, removeFromCart } = useContext(CartContext);

  const totalPrice = basket.reduce((total, product) => {
    const priceValue = parseFloat(product.price);
    return total + priceValue;
  }, 0);

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle relative"
      >
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item bg-blue-600 text-white">
            {basket.length}
          </span>
        </div>
      </div>

      <div
        tabIndex={0}
        className="card dropdown-content z-[1] mt-3 bg-white shadow-xl rounded-xl border border-gray-100 w-80"
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Shopping Cart
          </h2>

          <div className="max-h-96 overflow-y-auto space-y-4">
            {basket.length === 0 ? (
              <div className="text-center py-6 text-gray-500">
                Your cart is empty
              </div>
            ) : (
              basket.map((product, index) => (
                <div
                  key={`${product.uniqueId}-${index}`}
                  className="flex gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(product.uniqueId)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-1 text-sm text-gray-500">
                      {product.color || "Default"} · {product.size || "Default"}
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-medium text-gray-900">
                        €{parseFloat(product.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="border-t border-gray-100 p-4 bg-gray-50 rounded-b-xl">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium text-gray-900">
              €{totalPrice.toFixed(2)}
            </span>
          </div>

          <Link to="/shop" className="block">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Cart ({basket.length} items)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OverlayBasketProducts;

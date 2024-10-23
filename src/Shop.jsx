import { loadStripe } from "@stripe/stripe-js";
import { CircleX, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCallback, useContext, useState } from "react";
import { Footer } from "./components/footer";
import { NavBar } from "./components/navBar";
import { CartContext } from "./context/CartContext";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export function Shop() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavBar />
      <ProductsShop />
      <Footer />
    </div>
  );
}

function ProductsShop() {
  const { basket, removeFromCart } = useContext(CartContext);

  const totalPrice = basket.reduce((total, product) => {
    const priceValue = parseFloat(product.price);
    const quantity = parseInt(product.quantity) || 0;
    return total + priceValue * quantity;
  }, 0);

  const handleCheckout = async () => {
    try {
      const validItems = basket.filter((product) => product.quantity > 0);

      if (validItems.length === 0) {
        alert("Your cart is empty or all items have 0 quantity");
        return;
      }

      const items = validItems.map((product) => ({
        name: product.name,
        image: product.image[0],
        price: parseFloat(product.price),
        quantity: parseInt(product.quantity),
      }));

      const response = await fetch(
        "http://localhost:4000/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Payment error occurred");
      }

      // Vérifier si nous avons une URL de redirection directe
      if (data.url) {
        window.location.href = data.url;
        return;
      }

      // Sinon, utiliser sessionId
      if (!data.sessionId) {
        throw new Error("No session ID received from server");
      }

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId, // Utilisez data.sessionId au lieu de data.id
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert(error.message || "An error occurred during checkout");
    }
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShoppingBag className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Your Cart
              </h1>
            </div>
            <p className="text-gray-500 mt-2">
              {basket.length === 0
                ? "Your cart is empty"
                : `${basket.length} items in your cart`}
            </p>
          </header>

          {basket.length > 0 ? (
            <div className="mt-8">
              <ul className="space-y-6">
                {basket.map((product, index) => (
                  <CardShop
                    key={`${product.uniqueId}-${index}`}
                    {...product}
                    image={product.image[0]}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </ul>

              <div className="mt-12 border-t border-gray-200 pt-8">
                <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
                  <div className=" flow-root">
                    <div className="flex justify-between text-lg font-medium">
                      <p className="text-gray-900">Subtotal</p>
                      <p className="text-gray-900">${totalPrice.toFixed(2)}</p>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Shipping calculated at checkout
                    </p>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={handleCheckout}
                      className="w-full transform rounded-lg bg-blue-600 px-5 py-4 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98]"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <ShoppingBag className="mx-auto h-16 w-16 text-gray-400" />
              <p className="mt-4 text-gray-500">
                Start adding items to your cart
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CardShop({
  name,
  price,
  image,
  size,
  color,
  quantity,
  removeFromCart,
  uniqueId,
}) {
  const displaySize = size || "Default";
  const displayColor = color || "Default";

  return (
    <li className="group transform rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
      <div className="flex items-center gap-6">
        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">{name}</h2>
              <p className="mt-1 text-lg font-semibold text-blue-600">
                ${price}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(uniqueId)}
              className="transform rounded-full p-1 text-gray-400 transition-all hover:bg-red-50 hover:text-red-500"
            >
              <CircleX className="h-5 w-5" />
            </button>
          </div>

          <dl className="mt-4 space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <dt className="font-medium">Size:</dt>
              <dd className="rounded-md bg-gray-100 px-2 py-1">
                {displaySize}
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="font-medium">Color:</dt>
              <dd className="rounded-md bg-gray-100 px-2 py-1">
                {displayColor}
              </dd>
            </div>
          </dl>

          <div className="mt-4">
            <Input quantity={quantity} uniqueId={uniqueId} />
          </div>
        </div>
      </div>
    </li>
  );
}

function Input({ quantity, uniqueId }) {
  const { updateQuantity } = useContext(CartContext);
  const [count, setCount] = useState(quantity);

  const increment = useCallback(() => {
    if (count < 9) {
      const newCount = count + 1;
      setCount(newCount);
      updateQuantity(uniqueId, newCount);
    }
  }, [count, uniqueId, updateQuantity]);

  const decrement = useCallback(() => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      updateQuantity(uniqueId, newCount);
    }
  }, [count, uniqueId, updateQuantity]);

  return (
    <div className="inline-flex items-center rounded-lg border border-gray-200">
      <button
        type="button"
        onClick={decrement}
        className="inline-flex h-10 w-10 items-center justify-center rounded-l-lg border-r border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <Minus className="h-4 w-4" />
      </button>
      <input
        type="text"
        id={`quantity-input-${uniqueId}`}
        value={count}
        readOnly
        className="h- 10 w-12 border-0 bg-white text-center text-sm text-gray-900 focus:outline-none"
      />
      <button
        type="button"
        onClick={increment}
        className="inline-flex h-10 w-10 items-center justify-center rounded-r-lg border-l border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

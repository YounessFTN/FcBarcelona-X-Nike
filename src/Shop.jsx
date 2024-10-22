import { loadStripe } from "@stripe/stripe-js"; // Import de la fonction loadStripe
import { CircleX, Minus, Plus } from "lucide-react"; // Import des icônes
import { useContext, useState } from "react"; // Assurez-vous que useState est importé
import { Footer } from "./components/footer";
import { NavBar } from "./components/navBar";
import { CartContext } from "./context/CartContext";

export function Shop() {
  return (
    <>
      <NavBar />
      <ProductsShop />
      <Footer />
    </>
  );
}

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function ProductsShop() {
  const { basket, removeFromCart } = useContext(CartContext);

  const totalPrice = basket.reduce((total, product) => {
    const priceValue = parseFloat(product.price);
    return total + priceValue * product.quantity;
  }, 0);

  const handleCheckout = async () => {
    const items = basket.map((product) => ({
      name: product.name,
      image: product.image[0], // Vérifie que c'est un tableau avec au moins un élément
      price: product.price,
      quantity: product.quantity,
    }));

    try {
      const response = await fetch(
        "http://localhost:4000/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items }), // Envoie les articles au serveur
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const session = await response.json();
      const stripe = await stripePromise; // Utilise la promesse de Stripe
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {basket.map((product, index) => (
                <CardShop
                  key={`${product.uniqueId}-${index}`}
                  name={product.name}
                  image={product.image[0]}
                  price={product.price}
                  size={product.size}
                  color={product.color}
                  quantity={product.quantity}
                  removeFromCart={removeFromCart}
                  uniqueId={product.uniqueId}
                />
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-200 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <div className="flex justify-between text-lg font-semibold text-gray-900">
                  <dt>Total</dt>
                  <dd>${totalPrice.toFixed(2)}</dd>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleCheckout}
                    className="block rounded-lg bg-blue-600 px-5 py-3 text-sm text-white transition hover:bg-blue-500"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
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
    <li className="flex items-center gap-4 bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
      <img src={image} alt={name} className="h-16 w-16 rounded object-cover" />

      <div className="flex-1">
        <h2 className="text-xl font-medium text-gray-900">{name}</h2>
        <span className="text-md font-semibold text-gray-800">${price}</span>

        <dl className="mt-1 space-y-1 text-sm text-gray-600">
          <div>
            <dt className="inline font-medium">Size:</dt>
            <dd className="inline">{displaySize}</dd>
          </div>

          <div>
            <dt className="inline font-medium">Color:</dt>
            <dd className="inline">{displayColor}</dd>
          </div>
        </dl>
      </div>

      <div className="flex items-center justify-end gap-2">
        <Input quantity={quantity} uniqueId={uniqueId} />
        <button
          type="button"
          onClick={() => removeFromCart(uniqueId)}
          className="hover:text-red-500 text-xs font-medium hover:underline"
        >
          <CircleX />
        </button>
      </div>
    </li>
  );
}

function Input({ quantity, uniqueId }) {
  const { updateQuantity } = useContext(CartContext);
  const [count, setCount] = useState(quantity); // Assurez-vous que useState est correctement utilisé ici

  const increment = () => {
    if (count < 9) {
      const newCount = count + 1;
      setCount(newCount);
      updateQuantity(uniqueId, newCount);
    }
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      updateQuantity(uniqueId, newCount);
    }
  };

  return (
    <div className="relative flex items-center max-w-[8rem]">
      <button
        type="button"
        onClick={decrement}
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <Minus className="h-4 w-4 text-gray-600" />
      </button>
      <input
        type="text"
        id={`quantity-input-${uniqueId}`}
        value={count}
        readOnly
        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required=""
      />
      <button
        type="button"
        onClick={increment}
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <Plus className="h-4 w-4 text-gray-600" />
      </button>
    </div>
  );
}

import { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Import du contexte
import { NavBar } from "./NavBar"; // Import de la barre de navigation
import "../css/Shop.css"; // Import du fichier CSS pour styliser le composant
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";


const stripePromise = loadStripe("pk_test_51Q7Yld2LI8YUtc2bYqnjeCB4r8eTXirxzMKsEJtXzMBNzSrEsGmnvAFBt8mW2EAIbUdodTWA8KGquAxskQKnhA3200gpHazfRl"); // Remplace par ta clé publique Stripe



export function Shop() {
  const { basket } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const calculateSubtotal = () => {
    return basket.reduce((acc, product) => acc + product.price, 0);
  };

  const handleCheckout = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    // Envoie les articles du panier au backend pour créer la session de paiement
    const response = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ basket }), // Envoie le panier au serveur
    });

    const session = await response.json();

    // Redirige l'utilisateur vers le Checkout Stripe
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error);
    }

    setLoading(false);
  };

  return (
    <>
      <NavBar />
      <div className="shop-container">
        <h1>Récapitulatif de votre panier</h1>
        <div className="cart-summary">
          {basket.length > 0 ? (
            <>
              <ul className="cart-items">
                {basket.map((product, index) => (
                  <li key={index} className="cart-item">
                    <div className="cart-product-info">
                      <span className="cart-product-name">{product.name}</span>
                      <span className="cart-product-price">
                        {product.price.toFixed(2)} €
                      </span>
                      {product.size && (
                        <span className="cart-product-size">
                          Taille : {product.size}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <span>Sous-total :</span>
                <span>{calculateSubtotal().toFixed(2)} €</span>
              </div>

              <div className="cart-checkout">
                <button
                  className="checkout-button"
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  {loading ? "Chargement..." : "Passer à la caisse"}
                </button>
              </div>
            </>
          ) : (
            <p>Votre panier est vide.</p>
          )}
        </div>
      </div>
    </>
  );
}

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QCeDaGOVTeqsp6jRz9vrLMxBmbxexeFQ7JZBO3CZGiXdpQDASpT3DHyYaHx3IdG2fQqqW2xJfCx1IvSe6B2ptti005n0OKLyu"
); // Clé publique

async function handleCheckout() {
  const stripe = await stripePromise;

  const response = await fetch(
    "http://localhost:5000/create-checkout-session",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: basket }), // Envoie le panier
    }
  );

  const session = await response.json();
  const result = await stripe.redirectToCheckout({ sessionId: session.id });

  if (result.error) {
    console.error(result.error.message);
  }
}

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function OrderSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");  // Récupère l'ID de la session depuis l'URL
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    if (sessionId) {
      // Appelle ton backend pour récupérer les détails de la session via l'API Stripe
      fetch(`/stripe-session/${sessionId}`)
        .then((response) => response.json())
        .then((data) => setOrderDetails(data));
    }
  }, [sessionId]);

  return (
    <div>
      <h1>Merci pour votre commande !</h1>
      {orderDetails ? (
        <div>
          <p>Commande confirmée : {orderDetails.amount_total / 100} €</p>
          {/* Affiche d'autres détails si nécessaires */}
        </div>
      ) : (
        <p>Chargement des détails de votre commande...</p>
      )}
    </div>
  );
}

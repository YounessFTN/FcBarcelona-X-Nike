import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router.jsx";
import { CartProvider } from "./context/CartContext"; // Assure-toi que le chemin est correct

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider> {/* Enveloppe ton application */}
      <Router />
    </CartProvider>
  </StrictMode>
);

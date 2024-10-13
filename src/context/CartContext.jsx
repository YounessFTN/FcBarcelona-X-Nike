import { createContext, useEffect, useState } from "react";

// Créer le contexte pour le panier
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Récupérer le panier du localStorage ou initialiser un tableau vide
  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem("basket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  // Utiliser useEffect pour mettre à jour le localStorage chaque fois que le panier change
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  // Fonction pour ajouter un produit au panier
  const addToCart = (product) => {
    // Vérifie si la taille est requise (chaussures ou vêtements)
    const requiresSize =
      product.category === "chaussures" || product.category === "vêtements";

    // Si la taille est requise mais non présente, ne pas ajouter le produit
    if (requiresSize && !product.size) {
      alert(
        "Veuillez sélectionner une taille avant d'ajouter cet article au panier."
      );
      return;
    }

    // Ajoute le produit au panier
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  return (
    <CartContext.Provider value={{ basket, addToCart }}>
      {children}
      {console.log(basket)}
    </CartContext.Provider>
  );
};

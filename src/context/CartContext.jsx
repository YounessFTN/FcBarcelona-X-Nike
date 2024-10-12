import { createContext, useState } from 'react';

// Créer le contexte pour le panier
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [basket, setBasket] = useState([]); // L'état du panier

  // Fonction pour ajouter un produit au panier
  const addToCart = (product) => {
    // Vérifie si la taille est requise (chaussures ou vêtements)
    const requiresSize = product.category === 'chaussures' || product.category === 'vêtements';

    // Si la taille est requise mais non présente, ne pas ajouter le produit
    if (requiresSize && !product.size) {
      alert("Veuillez sélectionner une taille avant d'ajouter cet article au panier.");
      return;
    }

    // Ajoute le produit au panier
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  return (
    <CartContext.Provider value={{ basket, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";

// Créer le contexte pour le panier
export const CartContext = createContext(); // Assure-toi que CartContext est bien exporté

export const CartProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem("basket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToCart = (product) => {
    const requiresSize =
      product.category === "chaussures" || product.category === "vêtements";

    if (requiresSize && !product.size) {
      alert(
        "Veuillez sélectionner une taille avant d'ajouter cet article au panier."
      );
      return;
    }

    const productId = `${product.id}-${product.color || "no-color"}-${
      product.size || "no-size"
    }`;

    setBasket((prevBasket) => {
      const existingProductIndex = prevBasket.findIndex(
        (item) => item.uniqueId === productId
      );

      if (existingProductIndex > -1) {
        const updatedBasket = [...prevBasket];
        updatedBasket[existingProductIndex].quantity += product.quantity;
        return updatedBasket;
      }

      return [...prevBasket, { ...product, uniqueId: productId }];
    });
  };

  const removeFromCart = (productId) => {
    setBasket((prevBasket) =>
      prevBasket.filter((item) => item.uniqueId !== productId)
    );
  };

  // Nouvelle fonction pour mettre à jour la quantité d'un produit
  const updateQuantity = (uniqueId, quantity) => {
    setBasket((prevBasket) => {
      return prevBasket.map((item) =>
        item.uniqueId === uniqueId ? { ...item, quantity } : item
      );
    });
  };

  return (
    <CartContext.Provider
      value={{ basket, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

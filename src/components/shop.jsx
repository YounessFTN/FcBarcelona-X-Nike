import { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Import du contexte
import { NavBar } from "./NavBar"; // Import de la barre de navigation
import "../css/Shop.css"; // Import du fichier CSS pour styliser le composant

// Composant Shop pour afficher la liste des produits
export function Shop() {
  const { basket, addToCart } = useContext(CartContext); // Récupère le panier et la fonction addToCart depuis CartContext

  // Calcul du sous-total
  const subtotal = basket.reduce((acc, product) => acc + product.price, 0);

  // Affiche le panier dans la console pour débogage
  console.log("Panier actuel dans Shop :", basket);

  return (
    <>
      <NavBar />
      <div className="shop-container">
        <h1>Récapitulatif de votre panier</h1>

        {/* Affichage des informations du panier */}
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

              {/* Sous-total */}
              <div className="cart-total">
                <span>Sous-total :</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>

              {/* Bouton pour passer à la caisse */}
              <div className="cart-checkout">
                <button className="checkout-button">Passer à la caisse</button>
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

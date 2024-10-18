import { useContext } from "react"; // Importation de la fonction useContext
import { CartContext } from "../context/CartContext"; // Importation du contexte du panier
import { Link } from "react-router-dom"; // Importation de Link pour la navigation

// Composant OverlayBasketProducts
export function OverlayBasketProducts() {
  // Récupère le panier (basket) depuis le contexte CartContext
  const { basket } = useContext(CartContext); 

  // Calcul du prix total du panier
  const totalPrice = basket.reduce((total, product) => {
    const priceValue = parseFloat(product.price); // Convertir le prix en nombre (au cas où c'est une chaîne de caractères)
    return total + priceValue * product.quantity; // Multiplier le prix par la quantité du produit et l'ajouter au total
  }, 0); // Le total commence à 0

  // Rendu du composant (ce qui sera affiché dans l'interface)
  return (
    <div className="dropdown dropdown-end">
      {/* Bouton pour afficher le panier en tant que menu déroulant */}
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          {/* Icône du panier */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>

          {/* Affichage du nombre d'articles dans le panier */}
          <span className="badge badge-sm indicator-item">{basket.length}</span>
        </div>
      </div>

      {/* Contenu du panier (menu déroulant) */}
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 min-w-64 shadow"
      >
        {/* Liste des produits dans le panier */}
        <ul className="p-4 space-y-4 max-h-60 overflow-y-auto">
          {/* Map pour parcourir chaque produit dans le panier et l'afficher */}
          {basket.map((product, index) => (
            <li
              key={`${product.id}-${index}`} // Utilisation de l'ID du produit comme clé unique
              className="flex items-center gap-4"
            >
              {/* Image du produit */}
              <img
                src={product.image[0]} // Affiche la première image du produit
                alt={product.name} // Texte alternatif pour l'image
                className="size-16 rounded object-cover"
              />

              {/* Informations du produit (nom, taille, couleur, prix) */}
              <div className="w-full">
                <h3 className="font-medium text-sm text-gray-900">
                  {product.name} {/* Nom du produit */}
                </h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size: </dt>
                    <dd className="inline">{product.size}</dd> {/* Taille */}
                  </div>

                  <div>
                    <dt className="inline">Color: </dt>
                    <dd className="inline">{product.color}</dd> {/* Couleur */}
                  </div>

                  <div>
                    {/* Affichage du prix du produit */}
                    <dd className="text-xs text-black">{product.price} €</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer du panier, avec le total et un bouton pour accéder au panier */}
        <div className="card-body">
          {/* Affichage du prix total calculé */}
          <span className="font-semibold">
            Subtotal: {totalPrice.toFixed(2)} € {/* Formate le total à deux décimales */}
          </span>

          {/* Bouton pour voir le panier en entier, avec le nombre d'articles */}
          <div className="card-actions">
            <Link to="/shop">
              <button className="btn btn-block">
                View Bag {"(" + basket.length + ")"} {/* Affiche le nombre d'articles */}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

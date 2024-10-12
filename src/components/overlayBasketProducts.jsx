import { useEffect, useState } from "react";
import { basket as initialBasket } from "../data/basket";

export function OverlayBasketProducts() {
  const [basket, setBasket] = useState(initialBasket); // État local pour le panier
  const [nobreProduitsPanier, setNobreProduitsPanier] = useState(0);
  const [prixTotalProduits, setPrixTotalProduits] = useState(0);
  // Fonction pour calculer le prix total

  // Met à jour le nombre de produits dans le panier à chaque changement
  useEffect(() => {
    setNobreProduitsPanier(basket.length);
  }, [basket]);
  useEffect(() => {
    const total = basket.reduce(
      (accumulator, item) => accumulator + item.totalPrice,
      0
    );
    setPrixTotalProduits(total);
  }, [basket]);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
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
          <span className="badge badge-sm indicator-item">
            {nobreProduitsPanier}
          </span>
        </div>
      </div>

      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 min-w-64 shadow"
      >
        <ul className="p-4 space-y-4">
          {basket.map((product) => {
            const firstImage =
              Array.isArray(product.image) && product.image.length > 0
                ? product.image[0]
                : "";
            const nameProducts = product.name;
            const quantityProducts = product.quantity;
            const priceProducts = product.totalPrice;
            const selectedSize = product.size;

            return (
              <li key={product.id} className="flex items-center gap-4">
                <img
                  src={firstImage}
                  alt={nameProducts}
                  className="size-16 rounded object-cover"
                />

                <div className="w-full">
                  <h3 className="font-medium text-sm text-gray-900">
                    {nameProducts}
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Size: </dt>
                      <dd className="inline">{selectedSize}</dd>{" "}
                      {/* Affichez uniquement la taille sélectionnée ici */}
                    </div>

                    <div>
                      <dt className="inline">Quantity: </dt>
                      <dd className="inline">{quantityProducts}</dd>
                    </div>

                    <div>
                      <dd className="text-xs text-black">{priceProducts}$</dd>
                    </div>
                  </dl>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="card-body">
          <span className="font-semibold">Subtotal: {prixTotalProduits}$</span>
          <div className="card-actions">
            <button className="btn btn-block">
              View Bag {"(" + nobreProduitsPanier + ")"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

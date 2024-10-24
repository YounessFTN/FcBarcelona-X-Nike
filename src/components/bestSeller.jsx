import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function BestSeller() {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  useEffect(() => {
    fetch("https://my-api-heroku-b0d23b24e1c6.herokuapp.com/produits")
      .then((response) => response.json())
      .then((data) => {
        const mostPopularProducts = data
          .filter((product) => product.sold) // Filtrer les produits `mostPopular`
          .sort((a, b) => b.sold - a.sold) // Trier par `sold` pour les meilleurs vendeurs
          .slice(0, 4); // Limiter à 4 produits

        setBestSellingProducts(mostPopularProducts);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits :", error);
      });
  }, []);

  return (
    <div id="best-seller" className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Best Sellers
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {bestSellingProducts.map((product) => {
            const availableColors =
              product.colors && typeof product.colors === "object"
                ? Object.keys(product.colors).filter(
                    (color) => product.colors[color] === true
                  )
                : [];

            const firstImage =
              Array.isArray(product.image) && product.image.length > 0
                ? product.image[0]
                : "";
            const secondImage =
              Array.isArray(product.image) && product.image.length > 1
                ? product.image[1]
                : "";

            return (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                className="group block overflow-hidden"
              >
                <div className="relative h-[350px] sm:h-[450px]">
                  {firstImage && (
                    <img
                      src={firstImage}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-scale-down opacity-100 group-hover:opacity-0"
                    />
                  )}

                  {secondImage && (
                    <img
                      src={secondImage}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-scale-down opacity-0 group-hover:opacity-100"
                    />
                  )}
                </div>

                <div className="relative bg-white pt-1">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {product.name}
                  </h3>

                  <div className="mt-1.5 flex items-center justify-between text-gray-900">
                    <p className="tracking-wide">{product.price} €</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

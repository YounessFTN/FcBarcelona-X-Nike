import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Importer Link pour la navigation

export function ProductSearchInput() {
  const [products, setProducts] = useState([]); // État pour les produits
  const [searchTerm, setSearchTerm] = useState(""); // État pour le terme de recherche
  const [filteredProducts, setFilteredProducts] = useState([]); // État pour les produits filtrés

  async function fetchData() {
    try {
      const response = await fetch(
        "https://my-api-heroku-b0d23b24e1c6.herokuapp.com/produits",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProducts(data); // Mettre à jour l'état avec les produits reçus
        setFilteredProducts(data); // Initialiser les produits filtrés
      } else {
        console.error("Failed to fetch data from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData(); // Appel à l'API lors du montage du composant
  }, []);

  useEffect(() => {
    // Filtrer les produits en fonction du terme de recherche dans le nom ou la catégorie
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]); // Filtrer à chaque fois que la recherche ou les produits changent

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.metaKey && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div className="dropdown dropdown-end">
      <div className="hidden lg:flex form-control">
        <label className="input input-bordered flex items-center gap-2 p-2 shadow-sm hover:shadow-md transition-shadow duration-300">
          <input
            type="text"
            className="grow indicator focus:outline-none"
            placeholder="Search products..."
            value={searchTerm} // Lier l'input à l'état de recherche
            onChange={(e) => setSearchTerm(e.target.value)} // Mettre à jour le terme de recherche
          />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
      </div>
      <ul className="bg-white w-full dropdown-content p-4 space-y-4 max-h-60 overflow-y-auto shadow-lg rounded-lg">
        {filteredProducts.map((product, index) => (
          <Link
            key={`${product.id}-${index}`} // Utiliser l'ID du produit comme clé
            to={`/product/${product._id}`} // Lien vers la page de détails du produit
          >
            <li className="flex-col w-full items-center gap-4 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <img
                src={product.image ? product.image[0] : "default-image-url.jpg"}
                alt={product.name}
                className="w-full h-28 rounded-lg object-cover"
              />
              <div className="w-full">
                <h3 className="font-medium text-sm text-gray-900">
                  {product.name}
                </h3>
                <dl className="mt-0.5 space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <dt>Type:</dt>
                    <dd>{product.category || "N/A"}</dd>
                  </div>
                  <div className="text-right font-bold text-black">
                    {product.price} €
                  </div>
                </dl>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      {isSearchOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-[9999]">
          <div
            ref={inputRef}
            className="bg-white p-4 rounded-lg shadow-lg w-1/2"
          >
            <input
              type="text"
              placeholder="Search products..."
              className="input input-bordered w-full"
              value={searchTerm} // Lier à la recherche dans la fenêtre modale également
              onChange={(e) => setSearchTerm(e.target.value)} // Mettre à jour le terme de recherche
            />
          </div>
        </div>
      )}
    </div>
  );
}

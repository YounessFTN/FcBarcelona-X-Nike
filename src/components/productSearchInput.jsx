import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function ProductSearchInput() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermModal, setSearchTermModal] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const modalRef = useRef(null);
  const searchInputRef = useRef(null);

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
        setProducts(data);
        setFilteredProducts(data);
      } else {
        console.error("Failed to fetch data from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSearchTermModal(term);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => {
          modalRef.current?.querySelector("input")?.focus();
        }, 100);
      } else if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  const ProductList = ({ products, closeModal }) => (
    <ul className="bg-white w-full space-y-2 max-h-[60vh] overflow-y-auto rounded-lg">
      {products.length === 0 ? (
        <li className="text-center text-gray-500 py-4">No products found</li>
      ) : (
        products.map((product, index) => (
          <Link
            key={`${product.id}-${index}`}
            to={`/product/${product._id}`}
            onClick={closeModal}
          >
            <li className="group flex w-full hover:bg-gray-50 rounded-lg transition-all duration-200">
              {/* Container for image */}
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-l-lg">
                <img
                  src={
                    product.image ? product.image[0] : "default-image-url.jpg"
                  }
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Container for product details */}
              <div className="flex-1 p-3">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-medium text-sm text-gray-900 line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                        {product.category || "N/A"}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="font-bold text-sm text-blue-600">
                      {product.price} €
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        ))
      )}
    </ul>
  );

  return (
    <div className="relative">
      {/* Desktop Search Input */}
      <div className="hidden lg:block">
        <div className="relative">
          <input
            ref={searchInputRef}
            type="text"
            className="w-full h-10 pl-10 pr-12 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <kbd className="hidden sm:inline-flex px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* Mobile Search Button */}
      <button
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setIsSearchOpen(true)}
        aria-label="Search"
      >
        <Search className="w-5 h-5 text-gray-600" />
      </button>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="min-h-screen px-4 flex items-start justify-center pt-16">
            <div
              ref={modalRef}
              className="w-full max-w-2xl bg-white rounded-xl shadow-2xl transform transition-all"
            >
              <div className="p-4">
                <div className="relative">
                  <input
                    type="text"
                    autoFocus
                    className="w-full h-12 pl-10 pr-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                    placeholder="Search products..."
                    value={searchTermModal}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                <div className="mt-4">
                  <ProductList
                    products={filteredProducts}
                    closeModal={() => setIsSearchOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dropdown for desktop search results */}
      {searchTerm && !isSearchOpen && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <ProductList
            products={filteredProducts}
            closeModal={() => setSearchTerm("")}
          />
        </div>
      )}
    </div>
  );
}

export default ProductSearchInput;

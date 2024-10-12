import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Footer } from "./footer";
import { NavBar } from "./navBar";
import { ScrollToTop } from "./scroolToTop";
import { ChevronLeftIcon, ChevronRightIcon, CheckIcon } from '@heroicons/react/24/outline'; // Import des icônes

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch(`https://my-api-heroku-b0d23b24e1c6.herokuapp.com/produits/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <Navigate to="*" replace />;
  }

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleClick = () => {
    addCart({ ...product, quantity, size: selectedSize, color: selectedColor });
  };

  const isButtonDisabled = !selectedSize || !selectedColor;

  // Gestion du carrousel d'images
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.image.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <div className="flex flex-col items-start gap-8 sm:gap-20 lg:flex-row-reverse lg:items-start">
            {/* Affichage de l'image avec carrousel */}
            <div className="lg:w-2/3 order-first lg:order-last relative">
              <div className="relative h-[600px] w-full overflow-hidden">
                <img
                  src={product.image[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-gray-900"
                  onClick={prevImage}
                >
                  <ChevronLeftIcon className="h-8 w-8" />
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-gray-900"
                  onClick={nextImage}
                >
                  <ChevronRightIcon className="h-8 w-8" />
                </button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <p className="font-bold max-w-lg text-sm text-red-500 sm:text-base md:mb-10 lg:mb-2">
                {product.category.toUpperCase()}
              </p>
              <h1 className="text-xs mb-4 max-w-3xl font-bold md:text-5xl">
                {product.name}
              </h1>
              <p className="font-medium mb-3 max-w-lg text-sm text-gray-500 sm:text-l md:mb-10 lg:mb-8">
                Sold : {product.sold}
              </p>
              <p className="mb-6 w-full max-w-lg text-sm text-gray-500 sm:text-base md:mb-10 lg:mb-12">
                {product.description}
              </p>
              <p className="font-bold mb-6 max-w-lg text-2xl text-gray-500 sm:text-2xl md:mb-10 lg:mb-12">
                {product.price} €
              </p>
              {product.sizes.length > 0 && (
                <SizeProducts
                  sizes={product.sizes}
                  setSelectedSize={setSelectedSize}
                />
              )}
              <ColorProducts
                colors={product.colors}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />

              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  className="w-full p-2.5 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                onClick={handleClick}
                disabled={isButtonDisabled}
                className={`btn w-full ${
                  isButtonDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-black"
                } px-6 py-3 font-semibold text-white`}
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function addCart(product) {
  console.log("Product added to cart:", product);
}

function SizeProducts({ sizes, setSelectedSize }) {
  return (
    <div className="mb-10">
      <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
        Available Sizes :
      </h3>
      <ul className="grid w-fit gap-2 grid-cols-5">
        {sizes.map((size) => (
          <li key={size}>
            <input
              type="radio"
              id={`size-${size}`}
              name="size"
              value={size}
              className="hidden peer"
              onChange={() => setSelectedSize(size)}
            />
            <label
              htmlFor={`size-${size}`}
              className="inline-flex items-center justify-between p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">{size}</div>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ColorProducts({ colors, selectedColor, setSelectedColor }) {
  return (
    <div className="mb-10">
      <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
        Choose a color :
      </h3>
      <ul className="flex space-x-4">
        {Object.keys(colors).map((color) => (
          <li key={color} className="relative">
            <input
              type="radio"
              id={`color-${color}`}
              name="color"
              value={color}
              className="hidden peer"
              onChange={() => setSelectedColor(color)}
            />
            <label
              htmlFor={`color-${color}`}
              className={`inline-flex items-center justify-between p-2 border rounded-full cursor-pointer
                ${color === 'white' ? 'border-gray-300' : 'border-transparent'} peer-checked:ring-2 peer-checked:ring-indigo-500`}
              style={{ backgroundColor: color }}
            >
              <div className="block w-8 h-8 rounded-full" />
              {/* Affichage de l'icône d'encoche */}
              {selectedColor === color && (
                <CheckIcon
                  className="absolute inset-0 w-4 h-4 m-auto"
                  style={{ color: color === 'white' ? 'black' : 'white' }} // Icône noire pour le blanc, blanche pour les autres couleurs
                />
              )}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}


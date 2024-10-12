import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { basket } from "../data/basket";
import { productList } from "../data/produtcs";
import { Footer } from "./footer";
import { NavBar } from "./navBar";
import { ScrollToTop } from "./scroolToTop";

export function ProductDetail() {
  const { id } = useParams();
  const numericId = Number(id);
  const product = productList.find((item) => item.id === numericId);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) {
    return <Navigate to="*" replace />;
  }

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleClick = () => {
    addCart({
      ...product,
      quantity,
      size: selectedSize,
      color: selectedColor,
      totalPrice: product.price * quantity,
    });
  };

  const isButtonDisabled = !selectedSize || !selectedColor;

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <div className="flex flex-col items-start gap-8 sm:gap-20 lg:flex-row-reverse lg:items-start">
            <div className="lg:w-1/3">
              <p className="font-bold max-w-lg text-sm text-red-500 sm:text-base md:mb-10 lg:mb-2">
                {product.type.toUpperCase()}
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
                {product.price}
              </p>
              <SizeProducts
                sizes={product.sizes}
                setSelectedSize={setSelectedSize}
              />
              <ColorProducts
                colors={product.colors}
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
            <div className="lg:w-2/3 sticky top-28">
              <img src={product.image[0]} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function addCart(product) {
  const existingProduct = basket.find((item) => item.id === product.id);

  if (existingProduct) {
    // Vérifie si la taille ou la couleur diffère
    if (
      existingProduct.size === product.size &&
      existingProduct.color === product.color
    ) {
      existingProduct.quantity += product.quantity; // Met à jour la quantité
    } else {
      // Pousse un nouvel objet dans le panier si la taille ou la couleur est différente
      basket.push({ ...product }); // Copie du produit pour éviter les références
    }
  } else {
    basket.push(product); // Ajoute le nouveau produit s'il n'existe pas
  }

  console.log(basket);
}

function SizeProducts({ sizes, setSelectedSize }) {
  const sizeList = Object.keys(sizes).filter((size) => sizes[size]);
  return (
    <div className="mb-10">
      <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
        Available Sizes :
      </h3>
      <ul className="grid w-fit gap-2 grid-cols-5">
        {sizeList.map((size) => (
          <li key={size}>
            <input
              type="radio"
              id={`size-${size}`}
              name="size"
              value={size}
              className="hidden peer"
              required
              onChange={() => setSelectedSize(size)}
            />
            <label
              htmlFor={`size-${size}`}
              className="inline-flex items-center justify-between p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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

export function ColorProducts({ colors, setSelectedColor }) {
  return (
    <div className="mb-10">
      <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
        Choose a color :
      </h3>
      <ul className="grid w-full gap-6 md:grid-cols-4">
        {Object.keys(colors).map((color) => {
          if (colors[color]) {
            return (
              <li key={color}>
                <input
                  type="radio"
                  id={`color-${color}`}
                  name="color"
                  value={color}
                  className="hidden peer"
                  required
                  onChange={() => setSelectedColor(color)}
                />
                <label
                  htmlFor={`color-${color}`}
                  className="inline-flex items-center justify-between p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 dark:text-gray-400 dark:bg-gray-800"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">{color}</div>
                  </div>
                </label>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

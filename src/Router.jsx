import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllProducts } from "./allPoducts.jsx"; // Vérifie que le nom du fichier est correct (devrait probablement être allProducts.jsx)
import { NotFound } from "./components/404.jsx";
import { Acount } from "./components/acount.jsx";
import { ProductDetail } from "./components/productDetail.jsx";
import Home from "./home.jsx";
import "./index.css";

// Configuration du routeur
const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />, // Page 404 pour les routes non trouvées
  },
  {
    path: "/",
    element: <Home />, // Home page
  },
  {
    path: "/products",
    element: <AllProducts />, // Page des produits
  },
  {
    path: "/product/:id",
    element: <ProductDetail />, // Détails du produit
  },
  {
    path: "/account",
    element: <Acount />, // Page 404 pour les routes non trouvées
  },
]);
export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from "./allProducts.jsx";
import { NotFound } from "./components/404.jsx";
import { Account } from "./components/acount.jsx"; // Correction orthographique
import { ProductDetail } from "./components/productDetail.jsx";
import Home from "./home.jsx";
import "./index.css";

// Configuration du routeur
const router = createBrowserRouter([
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
    element: <Account />, // Page du compte utilisateur, correction du nom
  },
  {
    path: "*",
    element: <NotFound />, // Page 404 pour les routes non trouvées
  },
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

import { useEffect, useState } from "react"; // Importer les hooks useState et useEffect
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from "./allProducts.jsx";
import { NotFound } from "./components/404.jsx";
import { Account } from "./components/account.jsx";
import { LoadingComponent } from "./components/loadingComponent.jsx"; // Import du composant Loading
import { Login } from "./components/login.jsx";
import { ProductDetail } from "./components/productDetail.jsx";
import { Register } from "./components/register.jsx";
import Home from "./home.jsx";
import "./index.css";
import { Shop } from "./Shop.jsx";

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
    element: <Account />, // Page du compte utilisateur
  },
  {
    path: "/login",
    element: <Login />, // Page du compte utilisateur
  },
  {
    path: "/register",
    element: <Register />, // Page du compte utilisateur
  },
  {
    path: "/shop",
    element: <Shop />, // Page du compte utilisateur
  },
  {
    path: "*",
    element: <NotFound />, // Page 404 pour les routes non trouvées
  },
]);

export default function Router() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simule le chargement pendant 2 secondes

    return () => clearTimeout(timer);
  }, []);

  return (
    <>{isLoading ? <LoadingComponent /> : <RouterProvider router={router} />}</>
  );
}

import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from "./allProducts.jsx";
import { NotFound } from "./components/404.jsx";
import { Account } from "./components/account.jsx";
import { Footer } from "./components/footer.jsx";
import { LoadingComponent } from "./components/loadingComponent.jsx";
import { Login } from "./components/login.jsx";
import { NavBar } from "./components/navBar.jsx";
import { NeedHelp } from "./components/needHelp.jsx";
import { ProductDetail } from "./components/productDetail.jsx";
import { Register } from "./components/register.jsx";
import { Sizes3Dqrcode } from "./components/Sizes3D.jsx";

import Home from "./home.jsx";
import "./index.css";
import { Shop } from "./Shop.jsx";
import Confirmation from "./Stripe/confirmation.jsx";
import OrderError from "./Stripe/OrderError.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <AllProducts /> },
  { path: "/product/:id", element: <ProductDetail /> },
  { path: "/account", element: <Account /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/shop", element: <Shop /> },
  { path: "/confirmation", element: <Confirmation /> },
  {
    path: "/help",
    element: (
      <>
        {" "}
        <NavBar />
        <NeedHelp />
      </>
    ),
  },
  {
    path: "/error",
    element: <OrderError />,
  },
  {
    path: "/try-your-size",
    element: (
      <>
        <NavBar />
        <Sizes3Dqrcode />
        <Footer />
      </>
    ),
  },
  { path: "*", element: <NotFound /> },
]);

export default function Router() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>{isLoading ? <LoadingComponent /> : <RouterProvider router={router} />}</>
  );
}

import { useEffect, useState } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import AllProducts from "./allProducts.jsx";
import { NotFound } from "./components/404.jsx";
import { Account } from "./components/account.jsx";
import { Footer } from "./components/footer.jsx";
import { LoadingComponent } from "./components/loadingComponent.jsx";
import { Login } from "./components/login.jsx";
import { NavBar } from "./components/navBar.jsx";
import { NeedHelp } from "./components/needHelp.jsx";
import { ProductDetail } from "./components/productDetail.jsx";
import { Profile } from "./components/Profile.jsx";
import { Register } from "./components/register.jsx";
import { Sizes3Dqrcode } from "./components/Sizes3D.jsx";
import Home from "./home.jsx";
import "./index.css";
import { Shop } from "./Shop.jsx";
import Confirmation from "./Stripe/confirmation.jsx";
import OrderError from "./Stripe/OrderError.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route
              path="/help"
              element={
                <>
                  <NavBar />
                  <NeedHelp />
                </>
              }
            />
            <Route path="/error" element={<OrderError />} />
            <Route
              path="/try-your-size"
              element={
                <>
                  <NavBar />
                  <Sizes3Dqrcode />
                  <Footer />
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

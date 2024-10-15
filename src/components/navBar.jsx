import { AlignLeft, Hexagon } from "lucide-react";
import { ProductSearchInput } from "./productSearchInput";
import { Link } from "react-router-dom"; // Import de Link

import "../css/navBar.css";
import { OverlayBasketProducts } from "./overlayBasketProducts";
let styleSVG = {
  color: "#000000",
  width: 28,
  height: 28,
};

function LienNavBar() {
  return (
    <>
      <li>
        <Link to="/products">Products</Link> {/* Changement ici */}
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/">item</Link>
      </li>
    </>
  );
}

export function NavBar() {
  return <NavBar1 />;
}

function NavBar1() {
  return (
    <div className="navbar fixed z-30 bg-base-100 px-12">
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal ">
          <LienNavBar />
        </ul>
      </div>
      <div className="navbar-start lg:hidden">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <AlignLeft
              className="cursor-pointer"
              style={{
                ...styleSVG,
              }}
            />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <LienNavBar />
          </ul>
        </div>
      </div>

      <div className="navbar-center flex justify-center">
        <Link to="/" className="btn btn-ghost text-xl">
          <Hexagon
            className=""
            style={{
              ...styleSVG,
            }}
          />
          IbericX
        </Link>
      </div>
      <div className="navbar-end ">
        <ProductSearchInput />

        {/* ------------------ PANIER ------------------------- */}
        <OverlayBasketProducts />
        {/* ------------------ PROFIL ------------------------- */}

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile<span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import { AlignLeft, Hexagon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
        <Link to="/products">Products</Link> {/* Lien vers allProducts */}
      </li>
      <li>
        <a href="#">Item 2</a>
      </li>
      <li>
        <a href="#">Item 3</a>
      </li>
      <li>
        <a href="#">Item 4</a>
      </li>
    </>
  );
}

export function NavBar() {
  return <NavBar1 />;
}

function NavBar1() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.metaKey && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true); // Ouvrir l'input de recherche avec Commande + K
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
        setIsSearchOpen(false); // Fermer le pop-up si cliqué à l'extérieur
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
    <div className="navbar fixed z-30 bg-base-100 px-12">
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal">
          <LienNavBar />
        </ul>
      </div>
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <AlignLeft className="cursor-pointer" style={styleSVG} />
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
          <Hexagon style={styleSVG} />
          IbericX
        </Link>
      </div>
      <div className="navbar-end">
        <OverlayBasketProducts />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
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
            />
          </div>
        </div>
      )}
    </div>
  );
}

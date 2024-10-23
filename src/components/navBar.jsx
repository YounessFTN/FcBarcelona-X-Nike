import { AlignLeft, Hexagon } from "lucide-react";
import { Link } from "react-router-dom";
import { OverlayBasketProducts } from "./overlayBasketProducts";
import { ProductSearchInput } from "./productSearchInput";

const styleSVG = {
  color: "#000000",
  width: 28,
  height: 28,
};

function LienNavBar() {
  return (
    <>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/shop">Cart</Link>
      </li>
      <li>
        <Link to="/try-your-size">Try your size</Link>
      </li>
      <li>
        <Link to="/help">Need help</Link>
      </li>
    </>
  );
}

function LienACount() {
  return (
    <>
      <li>
        <Link className="justify-between">
          Profile<span className="badge">New</span>
        </Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/shop">Your cart</Link>
      </li>
    </>
  );
}

export function NavBar() {
  return (
    <div className="navbar fixed z-30 bg-base-100 px-4 lg:px-12">
      {/* Left section */}
      <div className="navbar-start flex items-center gap-1">
        {/* Mobile menu and search */}
        <div className="flex items-center gap-1 lg:hidden">
          {/* Burger menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <AlignLeft className="cursor-pointer" style={styleSVG} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <LienNavBar />
            </ul>
          </div>

          {/* Search on mobile - only show icon */}
          <div className="lg:hidden">
            <ProductSearchInput />
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="menu menu-horizontal hidden lg:flex">
          <LienNavBar />
        </ul>
      </div>

      {/* Center section */}
      <div className="navbar-center flex justify-center">
        <Link to="/" className="btn btn-ghost text-xl px-2">
          <Hexagon className="" style={styleSVG} />
          <span className="hidden lg:inline ml-2">IbericX</span>
        </Link>
      </div>

      {/* Right section */}
      <div className="navbar-end flex items-center gap-1">
        {/* Search on desktop */}
        <div className="hidden lg:block">
          <ProductSearchInput />
        </div>

        {/* Cart */}
        <OverlayBasketProducts />

        {/* Profile dropdown */}
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
            <LienACount />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import { AlignLeft, Hexagon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import de Link
import { basket as initialBasket } from "../data/basket";

import "../css/navBar.css";
import { OverlayBasketProducts } from "./overlayBasketProducts";
let styleSVG = {
  color: "#000000",
  width: 28,
  height: 28,
};
let teste = initialBasket;

function LienNavBar() {
  return (
    <>
      <li>
        <Link to="/products">Products</Link> {/* Changement ici */}
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
  // État pour contrôler la visibilité du pop-up de recherche
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null); // Référence pour l'input de recherche

  // Gérer l'événement clavier (⌘ + K)
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

  // Gérer le clic à l'extérieur pour fermer le pop-up de recherche
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
        <div className="hidden lg:flex form-control">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
        </div>

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
      {/* Pop-up de recherche */}
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

// function NavBar5() {
//   return (
//     <nav className="navBar">
//       <div className="listeLink-NavBar">
//         <LienNavBar />
//       </div>

//       <a href="../index.html">
//         <Hexagon className="cursor-pointer" {...styleSVG} />
//       </a>

//       <div className="navBar-Left">
//         <input
//           type="text"
//           placeholder="Rechercher un produit"
//           className="input-NavBar"
//         />
//         <CircleUserRound
//           onClick={() => alert("Profil")}
//           className="cursor-pointer"
//           {...styleSVG}
//         />
//         <div className="divider-NavBar">
//           <span className="nbProduitsPanier">{nobrePorduitsPanier}</span>

//           <ShoppingCart
//             onClick={() => alert("Panier")}
//             className="cursor-pointer"
//             {...styleSVG}
//           />
//         </div>
//       </div>
//     </nav>
//   );
// }
// function NavBar2() {
//   return (
//     <div className="navbar bg-base-100">
//       <div className="flex-1">
//         <a className="btn btn-ghost text-xl">daisyUI</a>
//       </div>
//       <div className="flex-none">
//         <div className="form-control">
//           <input
//             type="text"
//             placeholder="Search"
//             className="input input-bordered w-24 md:w-auto"
//           />
//         </div>
//         <div className="dropdown dropdown-end">
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//             <div className="indicator">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                 />
//               </svg>
//               <span className="badge badge-sm indicator-item">8</span>
//             </div>
//           </div>
//           <div
//             tabIndex={0}
//             className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
//           >
//             <div className="card-body">
//               <span className="text-lg font-bold">8 Items</span>
//               <span className="text-info">Subtotal: $999</span>
//               <div className="card-actions">
//                 <button className="btn btn-primary btn-block">View cart</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="dropdown dropdown-end">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle avatar"
//           >
//             <div className="w-10 rounded-full">
//               <img
//                 alt="Tailwind CSS Navbar component"
//                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//               />
//             </div>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <a className="justify-between">
//                 Profile
//                 <span className="badge">New</span>
//               </a>
//             </li>
//             <li>
//               <a>Settings</a>
//             </li>
//             <li>
//               <a>Logout</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// function NavBar3() {
//   return (
//     <div className="navbar bg-base-100">
//       <div className="flex-1">
//         <a className="btn btn-ghost text-xl">daisyUI</a>
//       </div>
//       <div className="flex-none gap-2">
//         <div className="form-control">
//           <input
//             type="text"
//             placeholder="Search"
//             className="input input-bordered w-24 md:w-auto"
//           />
//         </div>
//         <div className="dropdown dropdown-end">
//           <div
//             tabIndex="0"
//             role="button"
//             className="btn btn-ghost btn-circle avatar"
//           >
//             <div className="w-10 rounded-full">
//               <img
//                 alt="Tailwind CSS Navbar component"
//                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//               />
//             </div>
//           </div>
//           <ul
//             tabIndex="0"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <LienNavBar />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
// function NavBar4() {
//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h7"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <LienNavBar />
//           </ul>
//         </div>
//       </div>
//       <div className="navbar-center">
//         <a className="btn btn-ghost text-xl">
//           {" "}
//           <Hexagon className="cursor-pointer" {...styleSVG} />
//         </a>
//       </div>
//       <div className="navbar-end">
//         <div className="form-control">
//           <input
//             type="text"
//             placeholder="Search"
//             className="input input-bordered w-24 md:w-auto"
//           />
//         </div>
//         <div className="dropdown dropdown-end">
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//             <div className="indicator">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                 />
//               </svg>
//               <span className="badge badge-sm indicator-item">
//                 {nobrePorduitsPanier}
//               </span>
//             </div>
//           </div>
//           <div
//             tabIndex={0}
//             className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
//           >
//             <div className="card-body">
//               <span className="text-lg font-bold">
//                 {nobrePorduitsPanier} Items
//               </span>
//               <span className="text-info">Subtotal: $999</span>
//               <div className="card-actions">
//                 <button className="btn btn-primary btn-block">View cart</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="dropdown dropdown-end">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle avatar"
//           >
//             <div className="w-10 rounded-full">
//               <img
//                 alt="Tailwind CSS Navbar component"
//                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//               />
//             </div>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <a className="justify-between">
//                 Profile
//                 <span className="badge">New</span>
//               </a>
//             </li>
//             <li>
//               <a>Settings</a>
//             </li>
//             <li>
//               <a>Logout</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

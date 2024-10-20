import { Link } from "react-router-dom"; // Ajout de Link si nécessaire
import { Hexagon } from "lucide-react"; // Import correct du logo Iberic X (Hexagon)

export function Footer() {
  return <Footer2 />;
}

export function Footer1() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}

function Footer2() {
  const styleSVG = {
    color: "#000000",
    width: 33.6, // 28 * 1.2 = 33.6 (agrandissement de 20 %)
    height: 33.6, // 28 * 1.2 = 33.6 (agrandissement de 20 %)
  };

  return (
    <footer className="block">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="sm:flex-row flex justify-between items-start flex-col sm:flex-row">
          {/* Logo Iberic X and Iberic X Text */}
          <div className="flex items-center">
            {/* Hexagon logo from NavBar */}
            <Hexagon
              style={{
                ...styleSVG,
              }}
            />
            <h2 className="font-bold text-3xl md:text-5xl ml-2">Iberic X</h2>
          </div>

          {/* Address and Contact */}
          <div className="mt-8 md:mt-0">
            <div className="mb-4 flex items-start justify-start">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bb99e6cf78_MapPin.svg"
                alt=""
                className="inline-block mr-3"
              />
              <p className="text-gray-500 text-sm sm:text-base">
                8502 Preston Rd. Inglewood, Maine 98380, Barcelona
              </p>
            </div>
            <div className="mb-4 flex items-start justify-start">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944119e6cf76_EnvelopeSimple-2.svg"
                alt=""
                className="inline-block mr-3"
              />
              <p className="text-gray-500 text-sm sm:text-base">
                support@ibericx.com
              </p>
            </div>
          </div>

          {/* Nike Logo */}
          <div className="flex items-center justify-center mt-8 sm:mt-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="Nike Logo"
              className="h-8"
            />
          </div>
        </div>

        <div className="mb-14 w-full border-b border-black mt-16"></div>

        {/* Footer Links */}
        <div className="md:flex-row flex justify-between sm:items-center sm:flex-col items-start flex-col-reverse">
          <div className="font-semibold mb-4 sm:mb-0 py-1 text-center sm:text-center">
            <a
              href="#"
              className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
            >
              About 
            </a>
            <a
              href="#"
              className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
            >
              Features
            </a>
            <a
              href="#"
              className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
            >
              Works
            </a>
            <a
              href="#"
              className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
            >
              Support
            </a>
            <a
              href="#"
              className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
            >
              Help
            </a>
          </div>
          <p className="text-gray-500 text-sm sm:text-base">
            © Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

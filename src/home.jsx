import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import { BestSeller } from "./components/bestSeller.jsx";
import { Footer } from "./components/footer.jsx";
import { NavBar } from "./components/navBar.jsx";
import { NewsLetter } from "./components/newsLetter.jsx";
export default function App() {
  return (
    <>
      <NavBar />
      <PrincipaleSection />
      <BestSeller />
      <TypeProducts />
      <NewsLetter />
      <Footer />
    </>
  );
}

function PrincipaleSection() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("our-products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="pt-16">
        {/* Hero top */}
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `url('https://www.fcbarcelona.com/photo-resources/2024/05/27/cd150d48-afc7-4632-83bf-ae2c88187ab9/VO230607A80002.jpg?width=3200&height=1400')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.9)", // Assombrit l'image
          }}
        >
          {/* Container */}
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-20">
            {/* Title */}
            <h1 className="mb-6 max-w-3xl text-4xl text-white font-bold md:mb-10 md:text-6xl lg:mb-8">
              Nike X FC Barcelona
            </h1>
            {/* Subtitle */}
            <p className="mb-8 max-w-3xl text-sm text-gray-200 md:text-base lg:mb-12">
              Celebrate the unbreakable bond between Nike and FC Barcelona with
              exclusive collections that blend cutting-edge design and team
              pride. Elevate your game and showcase your passion for the
              Blaugrana.
            </p>
            {/* Buttons */}
            <div className="flex items-stretch">
              <button
                onClick={scrollToProducts}
                className="flex items-center justify-center rounded-md border border-solid border-black bg-white px-6 py-3 font-bold"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d411e6cf99_Vector%20(6).svg"
                  alt=""
                  className="mr-2 max-h-4 w-5"
                />
                <p>Discover</p>
              </button>
            </div>
          </div>
        </div>
        {/* Hero bottom */}
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          {/* Component */}
          <div className="relative flex max-w-7xl flex-col gap-4 lg:flex-row lg:justify-end">
            {/* Arrow down */}
            <a href="#best-seller" className="absolute bottom-0 left-0">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a946f0be6cfa0_Frame%2048040.svg"
                alt=""
                className="hidden lg:inline-block"
              />
            </a>
            <div className="max-w-xl lg:mr-[520px] lg:max-w-xs">
              {/* Title */}
              <h3 className="text-2xl font-bold md:text-3xl">Introduction</h3>
              {/* Divider */}
              <div className="my-6 w-16 border-t border-black"></div>
              <p className="text-sm text-gray-500">
                Welcome to <strong>Iberic X</strong>, the exclusive Nike
                sub-brand dedicated to the passionate fans of FC Barcelona.
                Explore a unique collection of official products, specially
                crafted for the most loyal supporters. From stylish apparel to
                exclusive accessories, <strong>Iberic X</strong> allows you to
                proudly wear your team’s colors while enjoying Nike’s signature
                quality and innovation. Join the elite group of Barça fans with
                products available only here.
              </p>
            </div>
            {/* Image */}
            <div className=" rounded-3xl relative bottom-0 right-0 mt-12 w-[480px] object-cover lg:absolute lg:mt-0 lg:h-[480px]">
              <VideoPlayer />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function TypeProducts() {
  return (
    <section id="our-products">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-3xl font-bold md:text-5xl">Our Products</h2>
        <p className="msm:text-base mb-8 mt-4 text-sm text-gray-500 md:mb-12 lg:mb-16">
          Discover Our Exclusive Collection
        </p>
        {/* Content */}
        <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
          {/* Clothing */}
          <Link
            to="/products?category=vêtements"
            className="relative flex h-[300px] items-end [grid-area:1/1/3/2] md:h-auto"
          >
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_599,c_limit/3ec26b21-5b4c-489e-a01b-3b72c4f07c30/nike-football.jpg"
              alt="Clothing"
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">Clothing</p>
              <p className="text-sm sm:text-base">Nike X FC Barcelona</p>
            </div>
          </Link>
          {/* Shoes */}
          <Link
            to="/products?category=chaussures"
            className="relative flex h-[300px] items-end"
          >
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_706,c_limit/e3a4a429-20ce-4345-9e98-a6e845848bd7/nike-football.jpg"
              alt="Shoes"
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">Shoes</p>
              <p className="text-sm sm:text-base">Nike</p>
            </div>
          </Link>
          {/* Accessories */}
          <Link
            to="/products?category=accessoires"
            className="relative flex h-[300px] items-end"
          >
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_552,c_limit/5bf9a93f-456b-49a0-b7d4-3e3874f92b0e/nike-basketball.png"
              alt="Accessories"
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">Accessories</p>
              <p className="text-sm sm:text-base">Nike X FC Barcelona</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Teste() {
  return (
    <>
      <header>
        {/* Hero Container */}
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              The Website You Want Without The Dev Time.
            </h1>
            <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-6 lg:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            {/* Hero Button */}
            <div className="flex items-stretch justify-center">
              <a
                href="#"
                className="mr-5 inline-block rounded-md bg-black px-8 py-4 text-center font-semibold text-white md:mr-6 lg:mr-8"
              >
                Get Started
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-solid border-black px-6 py-3 font-bold text-black"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944888e6cf97_PlayCircle%20(1).svg"
                  alt=""
                  className="mr-2 inline-block max-h-4 w-5"
                />
                <p className="text-sm text-black sm:text-base">Watch Demo</p>
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="inline-block max-h-[512px] w-full object-cover">
            <Spline
              className="rounded-3xl"
              scene="https://prod.spline.design/uAAFCaEovC3XvJBf/scene.splinecode"
            />
          </div>
        </div>
      </header>
    </>
  );
}
const VideoPlayer = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1, // Lecture automatique
      loop: 1, // Boucle
      playlist: "wwXaZf-Pym0", // ID de la vidéo pour la boucle
      controls: 0, // Masquer les contrôles
      showinfo: 0, // Masquer les infos
      modestbranding: 1, // Branding réduit
      fs: 0, // Désactiver le mode plein écran
      rel: 0, // Désactiver les vidéos recommandées
      cc_load_policy: 0, // Désactiver les sous-titres
      iv_load_policy: 3, // Désactiver les annotations
      mute: 1, // Muet pour contourner les restrictions de lecture automatique
    },
  };

  return (
    <div className="w-full h-full rounded-3xl overflow-hidden relative">
      <YouTube
        videoId="wwXaZf-Pym0"
        opts={videoOptions}
        onReady={(event) => {
          event.target.playVideo(); // Démarrer la vidéo dès qu'elle est prête
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" // Centre la vidéo
      />
    </div>
  );
};

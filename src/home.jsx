import { BestSeller } from "./components/bestSeller.jsx";
import { Footer } from "./components/footer.jsx";
import { NavBar } from "./components/navBar.jsx";
import { NewsLetter } from "./components/newsLetter.jsx";
import { OverlayBasketProducts } from "./components/overlayBasketProducts.jsx";
export default function App() {
  return (
    <>
      <NavBar />
      <PrincipaleSection />
      <BestSeller />
      <TypeProdcuts />
      <NewsLetter />

      <Footer />
    </>
  );
}

function PrincipaleSection() {
  return (
    <>
      <header className="pt-16">
        {/* Hero top */}
        <div className="bg-gray-300">
          {/* Container */}
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-20">
            {/* Title */}
            <h1 className=" mb-6 max-w-3xl text-4xl font-bold md:mb-10 md:text-6xl lg:mb-8">
              Nike X FC Barcelona
            </h1>
            {/* Subtitle */}
            <p className=" mb-8 max-w-3xl text-sm text-gray-500 md:text-base lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna
            </p>
            {/* Buttons */}
            <div className="flex items-stretch">
              <a
                href="#"
                className="mr-6 rounded-md bg-black px-8 py-4 text-center font-semibold text-white lg:mr-8"
              >
                CTA
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-solid border-black bg-white px-6 py-3 font-bold"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d411e6cf99_Vector%20(6).svg"
                  alt=""
                  className="mr-2 max-h-4 w-5"
                />
                <p>See Products</p>
              </a>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
            {/* Image */}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="relative bottom-0 right-0 mt-12 w-[480px] object-cover lg:absolute lg:mt-0 lg:h-[480px]"
            />
          </div>
        </div>
      </header>
    </>
  );
}

function TypeProdcuts() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-3xl font-bold md:text-5xl">Our Products</h2>
        <p className="msm:text-base mb-8 mt-4 text-sm text-gray-500 md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet elit ut aliquam
        </p>
        {/* Content */}
        <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
          {/* Item */}
          <a
            href="#"
            className="relative flex h-[300px] items-end [grid-area:1/1/3/2] md:h-auto"
          >
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_599,c_limit/3ec26b21-5b4c-489e-a01b-3b72c4f07c30/nike-football.jpg"
              alt=""
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">T-shirt</p>
              <p className="text-sm sm:text-base">Nike X FC Barcelona</p>
            </div>
          </a>
          {/* Item */}
          <a href="#" className="relative flex h-[300px] items-end">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_706,c_limit/e3a4a429-20ce-4345-9e98-a6e845848bd7/nike-football.jpg"
              alt=""
              className="inline-block h-full w-full rounded-lg object-cover"
            />

            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">Shoes</p>
              <p className="text-sm sm:text-base">Nike</p>
            </div>
          </a>
          {/* Item */}
          <a href="#" className="relative flex h-[300px] items-end">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_552,c_limit/5bf9a93f-456b-49a0-b7d4-3e3874f92b0e/nike-basketball.png"
              alt=""
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">Accessory</p>
              <p className="text-sm sm:text-base">Nike X FC Barcelona</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

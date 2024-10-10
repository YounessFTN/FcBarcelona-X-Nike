import { Footer } from "./components/footer.jsx";
import { NavBar } from "./components/navBar.jsx";
export function AllProducts() {
  return (
    <>
      <NavBar />

      <FiltreProduts />

      <Footer />
    </>
  );
}
function FiltreProduts2() {
  return (
    <>
      <section>
        {/* Container */}
        <div className="mx-auto w-full px-5 py-16 md:px-10 md:py-24">
          {/* Component */}
          <div className="flex flex-col gap-12">
            {/* Title */}
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold md:text-5xl">All products</h3>
              <p className="text-sm text-[#808080] sm:text-base">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            {/* Content */}
            <div className="grid gap-10 md:gap-12 lg:grid-cols-[max-content_1fr]">
              {/* Filters */}
              <div className="mb-4 max-w-none lg:max-w-sm">
                <form
                  name="wf-form-Filter-2"
                  method="get"
                  className="flex-col gap-6"
                >
                  {/* Filters title */}
                  <div className="mb-6 flex items-center justify-between py-4 [border-bottom:1px_solid_rgb(217,_217,_217)]">
                    <h5 className="text-xl font-bold">Filters</h5>
                    <a href="#" className="text-sm">
                      <p>Clear all</p>
                    </a>
                  </div>
                  {/* Search input */}
                  <input
                    type="text"
                    className="mb-10 block h-9 min-h-[44px] w-full rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] bg-[16px_center] bg-no-repeat py-3 pl-11 pr-4 text-sm font-bold text-[#333333] [background-size:18px] [border-bottom:1px_solid_rgb(215,_215,_221)]"
                    placeholder="Search"
                    style={{
                      backgroundImage:
                        'url("https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daaa_MagnifyingGlass.svg")',
                    }}
                  />
                  {/* Categories */}
                  <div className="flex flex-col gap-6">
                    <p className="font-semibold">Categories</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href="#"
                        className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold"
                      >
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daab_design.svg"
                          alt=""
                          className="inline-block"
                        />
                        <p>Design</p>
                      </a>
                      <a
                        href="#"
                        className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold"
                      >
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daae_illustration.svg"
                          alt=""
                          className="inline-block"
                        />
                        <p>Illustrations</p>
                      </a>
                      <a
                        href="#"
                        className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold"
                      >
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daad_icons.svg"
                          alt=""
                          className="inline-block"
                        />
                        <p>Icons</p>
                      </a>
                      <a
                        href="#"
                        className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold"
                      >
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daaf_plugins.svg"
                          alt=""
                          className="inline-block"
                        />
                        <p>Plugins</p>
                      </a>
                      <a
                        href="#"
                        className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold"
                      >
                        <img
                          src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daac_color%20palette.svg"
                          alt=""
                          className="inline-block"
                        />
                        <p>Color Palette</p>
                      </a>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="mb-6 mt-6 h-px w-full bg-[#d9d9d9]"></div>
                  {/* Rating */}
                  <div className="flex flex-col gap-6">
                    <p className="font-semibold">Rating</p>
                    <div className="flex flex-wrap gap-2 lg:justify-between">
                      <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] text-sm font-semibold">
                        <span>1</span>
                      </div>
                      <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-black text-sm font-semibold text-white">
                        <span>2</span>
                      </div>
                      <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] text-sm font-semibold">
                        <span>3</span>
                      </div>
                      <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] text-sm font-semibold">
                        <span>4</span>
                      </div>
                      <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] text-sm font-semibold">
                        <span>5</span>
                      </div>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="mb-6 mt-6 h-px w-full bg-[#d9d9d9]"></div>
                  {/* FIlter One */}
                  <div className="flex flex-col gap-6">
                    <div className="flex cursor-pointer items-center justify-between py-4 [border-top:1px_solid_rgba(0,_0,_0,_0)] md:py-0">
                      <p className="font-semibold">FIlter One</p>
                      <a href="#" className="inline-block text-sm text-black">
                        <p>Clear</p>
                      </a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="flex items-center text-sm font-medium">
                        <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
                        <span
                          className="inline-block cursor-pointer"
                          htmlFor="Filter-One-Option-1"
                        >
                          Option One
                        </span>
                      </label>
                      <label className="flex items-center text-sm font-medium">
                        <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
                        <span
                          className="inline-block cursor-pointer"
                          htmlFor="Filter-One-Option-1"
                        >
                          Option Two
                        </span>
                      </label>
                      <label className="flex items-center text-sm font-medium">
                        <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
                        <span
                          className="inline-block cursor-pointer"
                          htmlFor="Filter-One-Option-1"
                        >
                          Option Three
                        </span>
                      </label>
                      <label className="flex items-center text-sm font-medium">
                        <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
                        <span
                          className="inline-block cursor-pointer"
                          htmlFor="Filter-One-Option-1"
                        >
                          Option Four
                        </span>
                      </label>
                      <label className="flex items-center text-sm font-medium">
                        <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
                        <span
                          className="inline-block cursor-pointer"
                          htmlFor="Filter-One-Option-1"
                        >
                          Option Five
                        </span>
                      </label>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="mb-6 mt-6 h-px w-full bg-[#d9d9d9]"></div>
                  {/* FIlter Two */}
                  <div className="flex flex-col gap-6">
                    <div className="flex cursor-pointer items-center justify-between py-4 [border-top:1px_solid_rgba(0,_0,_0,_0)] md:py-0">
                      <p className="font-semibold">FIlter Two</p>
                      <a href="#" className="inline-block text-sm text-black">
                        <p>Clear</p>
                      </a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="flex items-center font-medium">
                        <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
                        <span
                          className="inline-block cursor-pointer"
                          htmlFor="Filter-One-Option-1"
                        >
                          All
                        </span>
                      </label>
                      <label className="flex items-center font-medium">
                        <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
                        <span
                          className="inline-block cursor-pointer"
                          htmlFor="Filter-One-Option-1"
                        >
                          Option One
                        </span>
                      </label>
                      <label className="flex items-center font-medium">
                        <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
                        <span
                          className="inline-block cursor-pointer"
                          htmlFor="Filter-One-Option-1"
                        >
                          Option Two
                        </span>
                      </label>
                      <label className="flex items-center font-medium">
                        <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
                        <span
                          className="inline-block cursor-pointer"
                          htmlFor="Filter-One-Option-1"
                        >
                          Option Three
                        </span>
                      </label>
                      <label className="flex items-center font-medium">
                        <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
                        <span
                          className="inline-block cursor-pointer"
                          htmlFor="Filter-One-Option-1"
                        >
                          Option Four
                        </span>
                      </label>
                      <label className="flex items-center font-medium">
                        <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
                        <span
                          className="inline-block cursor-pointer"
                          htmlFor="Filter-One-Option-1"
                        >
                          Option Five
                        </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              {/* Decor */}
              <div className="w-full [border-left:1px_solid_rgb(217,_217,_217)]">
                <div className="h-16 bg-[#cccccc]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function FiltreProduts() {
  return (
    <>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms
*/}

      <section className="pt-16">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>

            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <div className="mt-8 block lg:hidden">
            <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium"> Filters & Sorting </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="hidden space-y-4 lg:block">
              <div>
                <label
                  htmlFor="SortBy"
                  className="block text-xs font-medium text-gray-700"
                >
                  {" "}
                  Sort By{" "}
                </label>

                <select
                  id="SortBy"
                  className="mt-1 rounded border-gray-300 text-sm"
                >
                  <option>Sort By</option>
                  <option value="Title, DESC">Title, DESC</option>
                  <option value="Title, ASC">Title, ASC</option>
                  <option value="Price, DESC">Price, DESC</option>
                  <option value="Price, ASC">Price, ASC</option>
                </select>
              </div>

              <div>
                <p className="block text-xs font-medium text-gray-700">
                  Filters
                </p>

                <div className="mt-1 space-y-2">
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium">
                        {" "}
                        Availability{" "}
                      </span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          0 Selected{" "}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label
                            htmlFor="FilterInStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              In Stock (5+){" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterPreOrder"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPreOrder"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Pre Order (3+){" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterOutOfStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOutOfStock"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Out of Stock (10+){" "}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>

                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Price </span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          The highest price is $600{" "}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <div className="border-t border-gray-200 p-4">
                        <div className="flex justify-between gap-4">
                          <label
                            htmlFor="FilterPriceFrom"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceFrom"
                              placeholder="From"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>

                          <label
                            htmlFor="FilterPriceTo"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceTo"
                              placeholder="To"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </details>

                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Colors </span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          0 Selected{" "}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label
                            htmlFor="FilterRed"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterRed"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Red{" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterBlue"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterBlue"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Blue{" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterGreen"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterGreen"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Green{" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterOrange"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOrange"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Orange{" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterPurple"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPurple"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Purple{" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterTeal"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterTeal"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Teal{" "}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <li>
                  <a href="#" className="group block overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt=""
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Basic Tee
                      </h3>

                      <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>

                        <span className="tracking-wider text-gray-900">
                          {" "}
                          £24.00 GBP{" "}
                        </span>
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt=""
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Basic Tee
                      </h3>

                      <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>

                        <span className="tracking-wider text-gray-900">
                          {" "}
                          £24.00 GBP{" "}
                        </span>
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt=""
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Basic Tee
                      </h3>

                      <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>

                        <span className="tracking-wider text-gray-900">
                          {" "}
                          £24.00 GBP{" "}
                        </span>
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

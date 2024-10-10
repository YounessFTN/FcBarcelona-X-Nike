import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section>
      {/* Container */}
      <div className=" sticky pt-24px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
            alt=""
            className="mx-auto rounded-full mb-8 inline-block h-56 w-56 flex-none object-cover"
          />
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">404 Error</h1>
          <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
            Commodo, consequat turpis placerat ultrices sapien, tortor
            tincidunt. Sit quisque est metus auctor sed turpis lectus quis.
          </p>
          <Link
            to="/"
            className="inline-block items-center rounded-md bg-black px-8 py-4 text-center font-semibold text-white"
          >
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}

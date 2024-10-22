import Qrcode from "../images/qrCode-simple.png"; // Import correction

export function Sizes3Dqrcode() {
  return (
    <section className="py-16">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 max-w-2xl text-3xl font-bold md:text-5xl">
              Find the perfect size with just one scan!
            </h2>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-12">
              Scan the QR code and compare your feet with our 3D shoes for a
              guaranteed fit.
            </p>
            <a
              href="https://player.onirix.com/projects/5c9903444d5f4570895dd0ccfa4e1aa4/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ0OTU4LCJwcm9qZWN0SWQiOjkxNjAzLCJyb2xlIjozLCJpYXQiOjE3Mjk1MDA2Nzd9.WVEFAnKXl69JoD3vdlZdvnuxK0AvJbGkWJSHmZqJ2Rs&launchpad=true"
              className="inline-block bg-black px-6 py-3 text-center font-semibold text-white"
            >
              Try it now
            </a>
          </div>
          <div>
            <img
              src={Qrcode}
              alt="QR code for the 3D scene"
              className="mx-auto h-full w-full max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

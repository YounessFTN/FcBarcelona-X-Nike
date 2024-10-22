export function Sizes3Dqrcode() {
  return (
    <section className="py-16">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 max-w-2xl text-3xl font-bold md:text-5xl">
              Trouvez la taille parfaite en un scan !
            </h2>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-12">
              Scannez le QR code et comparez vos pieds avec nos chaussures en 3D
              pour un ajustement garanti.
            </p>
            <a
              href="#"
              className="inline-block items-center bg-black px-6 py-3 text-center font-semibold text-white"
            >
              Essayez maintenant
            </a>
          </div>
          <div>
            <img
              src="/path/to/your-qrcode.png"
              alt="QR code pour la scène 3D"
              className="mx-auto inline-block h-full w-full max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

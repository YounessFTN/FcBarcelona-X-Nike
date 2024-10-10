export function Card(data) {
  // Vérifie que data.colors est défini avant d'appeler Object.keys
  const availableColors =
    data.colors && typeof data.colors === "object"
      ? Object.keys(data.colors).filter((color) => data.colors[color] === true)
      : []; // Si colors n'est pas défini, retourne un tableau vide

  // Vérifie que data.image est défini et est un tableau avec au moins 2 images
  const firstImage =
    Array.isArray(data.image) && data.image.length > 0 ? data.image[0] : "";
  const secondImage =
    Array.isArray(data.image) && data.image.length > 1 ? data.image[1] : "";

  return (
    <a href="#" className="group block overflow-hidden">
      <div className="relative h-[350px] sm:h-[450px]">
        {firstImage && (
          <img
            src={firstImage}
            alt={data.name}
            className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />
        )}

        {secondImage && (
          <img
            src={secondImage}
            alt={data.name}
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        )}
      </div>

      <div className="relative bg-white pt-3">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {data.name}
        </h3>

        <div className="mt-1.5 flex items-center justify-between text-gray-900">
          <p className="tracking-wide">{data.prix}</p>

          <p className="text-xs uppercase tracking-wide">
            {availableColors.length} Colors Available
          </p>
        </div>
      </div>
    </a>
  );
}

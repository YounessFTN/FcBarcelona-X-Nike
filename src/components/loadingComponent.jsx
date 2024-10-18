import { useEffect, useState } from "react";

import { mirage } from "ldrs";

mirage.register();

export const LoadingComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Durée du chargement en millisecondes

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {isLoading ? (
        <div className="flex gap-2 flex-col items-center">
          {" "}
          <l-mirage
            className=""
            size="100"
            speed="2.5"
            color="black"
          ></l-mirage>
          <p className="text-l font-bold"></p>
        </div>
      ) : (
        <div>Contenu chargé !</div> // Remplace ceci par le contenu que tu veux afficher après le chargement
      )}
    </div>
  );
};

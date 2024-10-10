import gsap from "gsap"; // Importer GSAP pour l'animation
import { ReactLenis } from "lenis/react"; // Importer ReactLenis
import { useEffect, useRef } from "react"; // Importer les hooks nécessaires

function LenisScroll() {
  const lenisRef = useRef(); // Créer une référence pour Lenis

  useEffect(() => {
    // Fonction d'update pour la mise à jour de Lenis
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000); // Appeler la méthode raf de Lenis
    }

    gsap.ticker.add(update); // Ajouter la fonction d'update au ticker de GSAP

    return () => {
      gsap.ticker.remove(update); // Nettoyer le ticker lors du démontage du composant
    };
  }, []); // Le tableau vide [] signifie que l'effet ne s'exécute qu'une seule fois

  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false}
      smooth
      // Option pour ralentir le défilement
      smoothScroll={true} // Activer le défilement fluide
      wheel={0.5} // Ajuster la vitesse de la molette (valeur entre 0 et 1)
    ></ReactLenis>
  );
}

export default LenisScroll; // Exporter le composant

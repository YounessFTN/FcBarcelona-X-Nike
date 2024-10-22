import {
  AlertTriangle,
  Home,
  MessageCircle,
  RefreshCcw,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderError = () => {
  const [showContent, setShowContent] = useState(false);
  const [errorCode, setErrorCode] = useState(null);

  useEffect(() => {
    // Récupérer le code d'erreur de l'URL si présent
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("error_code");
    if (code) {
      setErrorCode(code);
    }

    // Animation d'entrée
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer); // Nettoyer le timer lors du démontage
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center p-4">
      <div
        className={`max-w-lg w-full transition-all duration-700 transform ${
          showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            {/* Icône d'erreur */}
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-red-50 p-3">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </div>

            {/* Titre de l'erreur */}
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
              Échec du traitement de la commande
            </h1>

            {/* Description de l'erreur */}
            <p className="text-gray-500 text-center mb-8">
              Nous avons rencontré un problème lors du traitement de votre
              commande. Ne vous inquiétez pas, aucun frais n'a été facturé sur
              votre compte.
            </p>

            {/* Détails de l'erreur */}
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <h3 className="font-semibold text-red-800">
                  Erreur de transaction
                </h3>
              </div>
              <div className="mt-2 text-red-700">
                {errorCode ? (
                  <span className="font-mono break-all">
                    Code d'erreur : {errorCode}
                  </span>
                ) : (
                  "Le paiement n'a pas pu être traité pour le moment."
                )}
              </div>
              <ul className="mt-4 text-red-700 text-sm space-y-2">
                <li>• Veuillez vérifier vos informations de paiement</li>
                <li>
                  • Assurez-vous que des fonds suffisants sont disponibles
                </li>
                <li>• Vérifiez votre adresse de facturation</li>
              </ul>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <RefreshCcw className="w-4 h-4" />
                Réessayer
              </button>

              <Link
                to="/"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                Retour à la page d'accueil
              </Link>

              <Link
                to="/help"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Contacter le support
              </Link>
            </div>
          </div>

          {/* Barres de dégradé en bas */}
          <div className="h-2 bg-gradient-to-r from-red-400 to-red-600" />

          {/* Informations de support */}
          <div className="px-8 py-4 bg-gray-50 text-sm text-gray-500 text-center">
            Notre équipe de support est disponible 24/7 pour vous aider avec
            tout problème.
            <br />
            ID de support : {Date.now().toString(36).toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderError;

import { Input } from "@headlessui/react"; // Import du composant Input de Headless UI
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import du hook pour la navigation
import { NavBar } from "./navBar"; // Ajoute le NavBar ici si nécessaire

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hook pour la navigation
  const navigate = useNavigate();

  // Fonction pour récupérer les utilisateurs stockés dans le localStorage
  const getStoredUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = getStoredUsers();

    // Vérification si un utilisateur avec l'email et le mot de passe existe
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log("Connexion réussie");
      // Redirection ou autre logique après connexion réussie
      // navigate('/dashboard'); // Rediriger vers une page de tableau de bord si nécessaire
    } else {
      console.log("Email ou mot de passe incorrect");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register"); // Navigation vers la page d'inscription
  };

  return (
    <>
      <NavBar />
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_599,c_limit/3ec26b21-5b4c-489e-a01b-3b72c4f07c30/nike-football.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Bienvenue chez Squid 🦑
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                Veuillez vous connecter pour continuer.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h2 className="text-2xl font-bold text-center">Connexion</h2>
              <form
                className="mt-8 grid grid-cols-6 gap-6"
                onSubmit={handleSubmit}
              >
                <div className="col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Adresse e-mail
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full border rounded-md p-2" // Ajout de classes de base CSS
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mot de passe
                  </label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 block w-full border rounded-md p-2" // Ajout de classes de base CSS
                  />
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="button"
                    onClick={handleRegisterClick}
                    className="btn"
                  >
                    Inscription
                  </button>
                  <button type="submit" className="btn">
                    Se connecter
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import du hook pour la navigation
import { NavBar } from "./navBar";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [userData, setUserData] = useState([]); // Pour stocker les utilisateurs

  const User = {
    name: name,
    email: email,
    password: password,
    number: number,
  };

  const navigate = useNavigate(); // Hook pour la navigation

  function SaveData() {
    const existingData = JSON.parse(localStorage.getItem("users")) || []; // Récupérer les données existantes
    existingData.push(User); // Ajouter le nouvel utilisateur
    localStorage.setItem("users", JSON.stringify(existingData)); // Sauvegarder les données
    setUserData(existingData); // Mettre à jour l'état local
  }

  function LoadData() {
    const savedData = JSON.parse(localStorage.getItem("users")) || [];
    return savedData.map((user, index) => (
      <div key={index}>
        <p>Nom : {user.name}</p>
        <p>Email : {user.email}</p>
        <p>Numéro : {user.number}</p>
        <hr />
      </div>
    ));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    SaveData();
    setEmail("");
    setPassword("");
    setName("");
    setNumber("");
    console.log(User); // Afficher les données de l'utilisateur dans la console
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigation vers la page de connexion
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <form
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    id="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    required
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="btn" type="submit">
                    S&apos;inscrire
                  </button>
                  <button onClick={handleLoginClick} className="btn">
                    Connexion
                  </button>
                  <button
                    onClick={() => setUserData(LoadData())}
                    className="btn"
                  >
                    Afficher les utilisateurs
                  </button>
                </div>
              </form>

              <h2 className="mt-8 text-lg font-bold">
                Données des utilisateurs inscrits :
              </h2>
              <div id="show">
                {userData.length > 0 ? (
                  LoadData()
                ) : (
                  <p>Aucune inscription enregistrée.</p>
                )}
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

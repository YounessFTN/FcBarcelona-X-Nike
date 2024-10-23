import {
  Edit,
  LogOut,
  MapPin,
  Save,
  Settings,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./navBar";

export const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Récupérer les données de l'utilisateur connecté
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      setUserData(currentUser);
      setEditedData(currentUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleEdit = () => {
    setIsEditing(true);
    setError("");
    setSuccessMessage("");
  };

  const handleSave = () => {
    try {
      // Validation basique
      if (!editedData.name || !editedData.email || !editedData.number) {
        setError("Tous les champs sont obligatoires");
        return;
      }

      // Mettre à jour les données dans le localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.map((user) =>
        user.email === userData.email ? editedData : user
      );

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("currentUser", JSON.stringify(editedData));

      setUserData(editedData);
      setIsEditing(false);
      setSuccessMessage("Profil mis à jour avec succès");
      setError("");
    } catch (err) {
      setError("Une erreur est survenue lors de la sauvegarde");
      console.error("Erreur de sauvegarde:", err);
    }
  };

  const handleCancel = () => {
    setEditedData(userData);
    setIsEditing(false);
    setError("");
    setSuccessMessage("");
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const handleInputChange = (e, field) => {
    setEditedData({
      ...editedData,
      [field]: e.target.value,
    });
  };

  if (!userData) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Messages de succès et d'erreur */}
          {successMessage && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center justify-between">
              {successMessage}
              <button onClick={() => setSuccessMessage("")}>
                <X size={20} />
              </button>
            </div>
          )}
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg flex items-center justify-between">
              {error}
              <button onClick={() => setError("")}>
                <X size={20} />
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                    <User size={64} className="text-gray-500" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">
                    {userData.name}
                  </h2>
                  <p className="text-gray-500">{userData.email}</p>
                </div>
                <div className="mt-6 space-y-2">
                  <button className="btn btn-ghost w-full flex items-center gap-2 justify-start">
                    <Settings size={20} />
                    Paramètres
                  </button>
                  <button className="btn btn-ghost w-full flex items-center gap-2 justify-start">
                    <ShoppingBag size={20} />
                    Commandes
                  </button>
                  <button className="btn btn-ghost w-full flex items-center gap-2 justify-start">
                    <MapPin size={20} />
                    Adresses
                  </button>
                  <button
                    onClick={handleLogout}
                    className="btn btn-error w-full flex items-center gap-2 justify-start text-white"
                  >
                    <LogOut size={20} />
                    Déconnexion
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">
                    Informations personnelles
                  </h3>
                  {!isEditing ? (
                    <button
                      onClick={handleEdit}
                      className="btn btn-primary flex items-center gap-2"
                    >
                      <Edit size={20} />
                      Modifier
                    </button>
                  ) : null}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={isEditing ? editedData.name : userData.name}
                      onChange={(e) => handleInputChange(e, "name")}
                      disabled={!isEditing}
                      className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={isEditing ? editedData.email : userData.email}
                      onChange={(e) => handleInputChange(e, "email")}
                      disabled={!isEditing}
                      className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      value={isEditing ? editedData.number : userData.number}
                      onChange={(e) => handleInputChange(e, "number")}
                      disabled={!isEditing}
                      className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-2"
                    />
                  </div>

                  {isEditing && (
                    <div className="flex justify-end space-x-2 mt-6">
                      <button
                        onClick={handleCancel}
                        className="btn btn-ghost flex items-center gap-2"
                      >
                        <X size={20} />
                        Annuler
                      </button>
                      <button
                        onClick={handleSave}
                        className="btn btn-primary flex items-center gap-2"
                      >
                        <Save size={20} />
                        Enregistrer
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Section Commandes récentes */}
              <div className="bg-white rounded-lg shadow p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Commandes récentes
                </h3>
                <div className="text-gray-500 text-center py-8">
                  <ShoppingBag
                    size={48}
                    className="mx-auto mb-4 text-gray-400"
                  />
                  <p>Aucune commande récente</p>
                </div>
              </div>

              {/* Section Adresses */}
              <div className="bg-white rounded-lg shadow p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Adresses enregistrées
                </h3>
                <div className="text-gray-500 text-center py-8">
                  <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
                  <p>Aucune adresse enregistrée</p>
                  <button className="btn btn-primary mt-4">
                    Ajouter une adresse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

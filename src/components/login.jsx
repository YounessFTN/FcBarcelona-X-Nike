import { Input } from "@headlessui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./navBar";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Adding state for errors

  const navigate = useNavigate();

  const getStoredUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    const users = getStoredUsers();

    // Check if a user with the email and password exists
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Store the logged-in user in localStorage
      localStorage.setItem("currentUser", JSON.stringify(user));
      console.log("Login successful");
      navigate("/profile"); // Redirect to the profile page
    } else {
      setError("Incorrect email or password");
      console.log("Incorrect email or password");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
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
                Welcome to Squid 🦑
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                Please log in to continue.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h2 className="text-2xl font-bold text-center">Login</h2>
              {error && (
                <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
                  {error}
                </div>
              )}
              <form
                className="mt-8 grid grid-cols-6 gap-6"
                onSubmit={handleSubmit}
              >
                <div className="col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full border rounded-md p-2"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 block w-full border rounded-md p-2"
                  />
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="button"
                    onClick={handleRegisterClick}
                    className="btn"
                  >
                    Don't have an account? Register here.
                  </button>
                  <button type="submit" className="btn">
                    Log in
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

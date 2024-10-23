import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the navigation hook
import { NavBar } from "./navBar";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [userData, setUserData] = useState([]); // To store users

  const User = {
    name: name,
    email: email,
    password: password,
    number: number,
  };

  const navigate = useNavigate(); // Navigation hook

  function SaveData() {
    const existingData = JSON.parse(localStorage.getItem("users")) || []; // Retrieve existing data
    existingData.push(User); // Add the new user
    localStorage.setItem("users", JSON.stringify(existingData)); // Save the data
    setUserData(existingData); // Update local state
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    SaveData();
    setEmail("");
    setPassword("");
    setName("");
    setNumber("");
    console.log(User); // Log user data to the console
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
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
                Join the FC Barcelona Family!
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                Sign up now to explore exclusive merchandise and special offers.
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
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="btn" type="submit">
                    Sign Up
                  </button>
                  <p className="mt-4 text-sm text-gray-700">
                    To log in, go to the{" "}
                    <span
                      className="cursor-pointer text-blue-500"
                      onClick={handleLoginClick}
                    >
                      login page
                    </span>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

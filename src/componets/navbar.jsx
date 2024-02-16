import { useState } from "react";
import Airbnb from "../icons/airbnb";
import Planet from "../icons/planet";
import User from "../icons/user";
import Search from "../icons/search";
import { Link } from "react-router-dom";
import Google from "../icons/google";
import { useNavigate } from "react-router-dom";
import { GoogleAuthPopUp } from "../firebase/logingoo";
import Faceico from "../icons/face";
import { FacebookAuthPopUp } from "../firebase/facelogin";
import '../stylenavbar/style.css'

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [verPopup, setVerPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleCreateAccountPopup = () => {
    setVerPopup(!verPopup);
  };

  const closeCreateAccountPopup = () => {
    setVerPopup(false);
  };

  const navigate = useNavigate();

  const handleLogin = async (authFunction, storageKey) => {
    try {
      const result = await authFunction();
      const token = await result.user.getIdToken(true);
      sessionStorage.setItem(storageKey, JSON.stringify(token));
      navigate("/");
    } catch (error) {
      console.error("Error de autenticación:", error.message);
    }
  };

  return (
    <nav className="border-2 border-gray-200">
      <div className="prin flex flex-col md:flex-row justify-center items-center p-4">
        <div className="flex justify-center items-center md:justify-start ">
          <Link className="flex items-center" to="/">
            <Airbnb />
            <h2 className="pepito air font-bold text-[20px]">airbnb</h2>
          </Link>
        </div>
        <div className="pedrito1 flex justify-center self-center text-center">
          <ul className="lista flex text-[15px]">
            <li className="neee0">
              <button className=" p-2 hover:bg-gray-200 rounded-xl ">
                Estadias
              </button>
            </li>
            <li className="neee1">
              <button className=" p-2 hover:bg-gray-200 rounded-xl">
                Experiencias
              </button>
            </li>
            <li className="neee2">
              <button
                onClick={() =>
                  window.open(
                    "https://www.airbnb.com.co/s/experiences/online",
                    "_blank"
                  )
                }
                className="p-2 hover:bg-gray-200 rounded-xl block"
              >
                Experiencias en línea
              </button>
            </li>
          </ul>
        </div>
        <div className="flex justify-center md:justify-start items-center gap-3 relative">
          <button className=" p-2 hover:bg-gray-200 rounded-xl font-semibold ">
            Pon tu espacio en Airbnb
          </button>
          <Planet />
          <button onClick={togglePopup}>
            <User />
          </button>
          {showPopup && (
            <div className="popup absolute bg-white border border-gray-300 rounded-md p-2 mt-2 md:mt-0 md:mr-4">
              <h2 className="text-lg font-semibold">¿Qué deseas hacer?</h2>
              <button
                className="block w-full py-1 mt-1 text-sm font-semibold text-center text-gray-800 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                onClick={toggleCreateAccountPopup}
              >
                Crear Cuenta
              </button>
              <button
                className="block w-full py-1 mt-1 text-sm font-semibold text-center text-gray-800 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                onClick={toggleCreateAccountPopup}
              >
                Iniciar Sesión
              </button>
              <button
                className="block w-full py-1 mt-1 text-sm font-semibold text-center text-gray-800 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                onClick={togglePopup}
              >
                Cerrar Sesión
              </button>
            </div>
          )}
          {verPopup && (
            <div className="popup-create-account absolute bg-white border border-gray-300 rounded-md p-4 w-full md:w-80 animate-slide-up z-20 mt-2 md:mt-0 md:right-4">
              <button
                className="absolute top-0 right-0 p-2 font-bold"
                onClick={closeCreateAccountPopup}
              >
                X
              </button>
              <h2 className="text-lg font-semibold mb-2">
                ¿Cómo quieres iniciar tu cuenta?
              </h2>
              <button
                onClick={() => handleLogin(GoogleAuthPopUp, "token")}
                className="flex items-center justify-center w-full py-1 mt-1 text-sm font-semibold text-gray-800 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus:bg-gray-200 "
              >
                <Google />
                Crear con Google
              </button>

              <button
                onClick={() => handleLogin(FacebookAuthPopUp, "token")}
                className="flex items-center justify-center w-full py-1 mt-1 text-sm font-semibold text-gray-800 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
              >
                <Faceico />
                Crear con Facebook
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="pepete flex  p-4 justify-center self-center ">
        <div className="nani pepete flex gap-24 bg-white text-star p-3 border-2 border-gray-300">
          <ul className="pepete">
            <li>Where</li>
            <li>
              <input
                className="triki w-[100%] bg-transparent rounded-none"
                placeholder="Search Destinations"
                type="text"
                name=""
                id=""
              />
            </li>
          </ul>
          <ul className="pepete">
            <li>Check in</li>
            <li className="text-[16px] text-gray-400 ">Add Date</li>
          </ul>
          <ul className="pepete">
            <li>Check Out</li>
            <li className="text-[16px]  text-gray-400">Add Dates</li>
          </ul>
          <ul className="pepete">
            <li>Who</li>
            <li className="text-[16px]  text-gray-400">Add Guests</li>
          </ul>
          <div className="pepete search p-3 rounded-full">
            <Search />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

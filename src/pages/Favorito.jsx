import { useState } from "react";
import { Link } from "react-router-dom";
import '../stylenavbar/style.css'

import img1 from "../img/img.png";

const Favorite = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="p-4 bg-gray-200 text-center text-[16px]">
        <button
          className="underline font-semibold p-1"
          onClick={() => setShowPopup(true)}
        >
          Favorito entre huéspedes; los espacios que más gustan en Airbnb
        </button>
      </div>

      {showPopup && (
        <div className=" tete absolute z-30 top-0 left-0 w-[50%] h-full flex justify-center items-center self-center ml-[25%] md:flex-none sm:flex-none max-lg:flex-none">
          <div className="pepito bg-white p-4 rounded-lg shadow-lg animate-slideIn">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowPopup(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className=" pppp flex items-center justify-center text-center ">
              <div className="w-[50%] trata  ">
                <h1 className="trata text-[30px] font-semibold ">Estos son Favoritos entre huéspedes</h1>
                <br />
                <p className="text-[18px] trata text-gray-500">Si el alojamiento se muestra como Favorito entre huéspedes, es uno de los dos millones de los más populares en Airbnb.</p>
                <br />
                <Link to="/">
                    <button onClick={() => setShowPopup(false)} className="bg-gray-900 text-white p-4 rounded-xl text-[15px] hover:bg-black ">Empieza a explorar</button>
                </Link>
                
              </div>
              <div className="mr-5  imgg ">
                <img src={img1} alt="Imagen" className="w-[300px] " />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Favorite;

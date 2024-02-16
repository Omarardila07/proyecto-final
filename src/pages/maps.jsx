import { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Link } from "react-router-dom";
import Lista from "../icons/lista";

const Maps = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error("Error getting user location:", error);
          },
          {
            enableHighAccuracy: true,
            timeout: 2000,
            maximumAge: 0,
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  const mapContainerStyle = {
    width: "100%",
    height: "530px",
  };

  return (
    <>
      <div>
          

      </div>


      <div className="relative">
        <div className="flex-1 overflow-y-auto bg-gray-100" > 
        <LoadScript
          googleMapsApiKey="AIzaSyAKM8zrLucC9kAtMVv8Gv1vkyAgDfa-MoY"
        >
          {userLocation && (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={userLocation}
              zoom={13}
            >

            </GoogleMap>
          )}
        </LoadScript>
      </div>
        <Link to="/" >
          <button className="flex text-center items-center text-white fixed bottom-4 p-4  bg-red-400 text-sm rounded left-1/2 transform -translate-x-1/2">
            Mostar Lista
            <Lista />
          </button>
        </Link>

      </div>
    </>
  );
};





export default Maps;

import { useState, useEffect } from "react";
import Mapsico from "../icons/mapsico";
import HeartFilledIcon from "../icons/hearRed";
import HeartOutlineIcon from "../icons/hear";
import { Link } from "react-router-dom";
import data from "../java/Main.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Home = () => {
  const [likes, setLikes] = useState(() => {
    const storedLikes =
      JSON.parse(localStorage.getItem("likes")) ||
      Array(data.bienes_por_vender.length).fill(false);
    return storedLikes;
  });

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  const handleLikeClick = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mt-8 p-4 relative">
          {data.bienes_por_vender.map((casa, index) => (
            <div key={index} className="flex flex-col text-left relative">
              <Link to={`/casa/${casa.properties.ID}`}>
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src={casa.properties.image1}
                      alt="Casa"
                      style={{ width: "100%", height: "100%" }}
                      className="relative rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={casa.properties.image2}
                      alt="casa2"
                      style={{ width: "100%", height: "100%" }}
                      className="relative rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={casa.properties.image3}
                      alt="casa3"
                      style={{ width: "100%", height: "100%" }}
                      className="relative rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={casa.properties.image4}
                      alt="casa4"
                      style={{ width: "100%", height: "100%" }}
                      className="relative rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={casa.properties.image5}
                      alt="casa5"
                      style={{ width: "100%", height: "100%" }}
                      className="relative rounded-xl"
                    />
                  </SwiperSlide>
                </Swiper>
              </Link>
              <p className="mb-2 font-semibold">
                {casa.properties.description}
              </p>
              <p className="mb-2">{casa.properties.Cost}</p>
              <p className="mb-2">{casa.properties.SingleFamilyResidence}</p>
              <button
                className="absolute z-20 top-0 right-0 m-2 p-2 rounded-full"
                onClick={() => handleLikeClick(index)}
              >
                {likes[index] ? <HeartFilledIcon /> : <HeartOutlineIcon />}
              </button>
            </div>
          ))}
        </div>
        <Link to="/Maps">
          <button className="flex z-20 text-center items-center text-white fixed bottom-4 p-4 bg-red-400 text-sm rounded left-1/2 transform -translate-x-1/2">
            Mapa
            <Mapsico />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;

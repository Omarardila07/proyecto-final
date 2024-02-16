import { useParams } from "react-router-dom";
import data from "../java/Main.json";
import Share from "../icons/share";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Paypalico from "../icons/paypalico"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const CasaDetalles = () => {
  const { id } = useParams();
  const casa = data.bienes_por_vender.find((casa) => casa.properties.ID === id);

  if (!casa) {
    return <p>Casa no encontrada</p>;
  }

  const [verPopup, setVerPopup] = useState(false);
  const [copiadoExitosamente, setCopiadoExitosamente] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0); 

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [startDate, endDate]);

  const toggleCreateAccountPopup = () => {
    setVerPopup(!verPopup);
  };

  const calculateTotalPrice = () => {
    if (!startDate || !endDate) {
      return 0;
    }

    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    const price = parseFloat(casa.properties.Cost.replace(/[^\d.-]/g, ""));
    const totalPrice = price * differenceInDays;
    return totalPrice.toFixed(2);
  };

  const compartirEnlace = (redSocial) => {
    let url = window.location.href;
    switch (redSocial) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank");
        break;
      case "instagram":
        window.open(
          `https://www.instagram.com/share?url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "copiar":
        navigator.clipboard.writeText(url);
        setCopiadoExitosamente(true);
        setTimeout(() => {
          setCopiadoExitosamente(false);
        }, 2000);
        break;
      default:
        break;
    }
  };

  return (
  <div className="flex justify-center items-center" >
    <div className="p-4 w-full md:w-[70%] font-sans rounded">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="md:w-1/2">
          <div className="flex gap-5 p-1 self-center items-center">
            <h2 className="font-semibold text-[20px] ">
              {casa.properties.description}
            </h2>
            <button
              className="flex gap-1 p-2 hover:bg-gray-200 rounded-xl text-center hover:font-semibold"
              onClick={toggleCreateAccountPopup}
            >
              <Share />
              Compartir
            </button>
          </div>
          <div className="flex flex-wrap">
          <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src={casa.properties.image1}
                      alt="Casa"
                      className="w-[100%] h-auto rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={casa.properties.image2}
                      alt="casa2"
                      className="w-[100%] h-auto rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={casa.properties.image3}
                      alt="casa"
                      className="w-[100%] h-auto rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={casa.properties.image4}
                      alt="casa4"
                      className="w-[100%] h-auto rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={casa.properties.image5}
                      alt="casa5"
                      className="w-[100%] h-auto rounded-xl"
                    />
                  </SwiperSlide>
                </Swiper>
          </div>
        </div>
        <div className="md:w-1/2 bg-gray-200 p-2 rounded-lg flex justify-center items-center">
          <div className="flex flex-col gap-3 mt-4">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Fecha de inicio"
                className="p-2 border rounded-xl w-full "
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="Fecha de fin"
                className="p-2 border rounded-xl w-full"
              />
            <div className="flex justify-between items-center gap-3">
              <p className="font-bold">Precio total: ${totalPrice}</p>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="PP5JFK66F2ES6"
                />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="amount" value={totalPrice} />
                <button className="flex gap-1 bg-blue-500 p-2 rounded-xl text-white font-bold">
                  <Paypalico />
                  Paypal
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {verPopup && (
  <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">Compartir enlace</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
          onClick={() => compartirEnlace("facebook")}
        >
          Compartir en Facebook
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mb-2"
          onClick={() => compartirEnlace("whatsapp")}
        >
          Compartir en WhatsApp
        </button>
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded mb-2"
          onClick={() => compartirEnlace("instagram")}
        >
          Compartir en Instagram
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded mb-2"
          onClick={() => compartirEnlace("copiar")}
        >
          Copiar enlace
        </button>
        <button
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          onClick={toggleCreateAccountPopup}
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
)}

      {copiadoExitosamente && (
        <div className="fixed bottom-0 left-0 w-full bg-green-500 text-white text-center py-2">
          Enlace copiado con éxito
        </div>
      )}
    </div>

  </div>
  );
};

export default CasaDetalles;

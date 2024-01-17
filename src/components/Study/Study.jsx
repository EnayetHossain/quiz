import { useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AppContext } from "../../Context/AppProvider";

const Study = () => {
  const { sliderRef, handleNext, handlePrev } = useContext(AppContext);

  const data = [
    {
      id: 1,
      body: "9 + 6 + 7x - 2x - 3",
    },
    {
      id: 2,
      body: "9 + 6 + 7x - 2x - 3",
    },
    {
      id: 3,
      body: "9 + 6 + 7x - 2x - 3",
    },
    {
      id: 4,
      body: "9 + 6 + 7x - 2x - 3",
    },
    {
      id: 5,
      body: "9 + 6 + 7x - 2x - 3",
    },
    {
      id: 6,
      body: "9 + 6 + 7x - 2x - 3",
    },
    {
      id: 7,
      body: "9 + 6 + 7x - 2x - 3",
    },
    {
      id: 8,
      body: "9 + 6 + 7x - 2x - 3",
    },
    {
      id: 9,
      body: "9 + 6 + 7x - 2x - 3",
    },
    {
      id: 10,
      body: "9 + 6 + 7x - 2x - 3",
    },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        ref={sliderRef}
        pagination={{
          type: "fraction",
          el: ".swiper-custom-pagination",
        }}
        modules={[Pagination]}
        className="mySwiper font-inter px-0"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((dt) => (
          <SwiperSlide
            key={dt.id}
            className="text-primary-color bg-gradient-to-tr from-gradient-3 via-gradient-6 to-gradient-2 rounded-3xl px-10 pt-4 overflow-hidden"
          >
            <div className="flex justify-between items-center">
              <svg
                width="20"
                height="30"
                viewBox="0 0 20 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.75824 27.7612C5.75824 28.5405 6.39585 29.1781 7.17515 29.1781H12.8428C13.6221 29.1781 14.2597 28.5405 14.2597 27.7612V26.3443H5.75824V27.7612ZM10.009 0.839813C4.53969 0.839813 0.0905762 5.28893 0.0905762 10.7582C0.0905762 14.1305 1.77671 17.0918 4.34132 18.8913V22.0935C4.34132 22.8728 4.97893 23.5105 5.75824 23.5105H14.2597C15.039 23.5105 15.6766 22.8728 15.6766 22.0935V18.8913C18.2413 17.0918 19.9274 14.1305 19.9274 10.7582C19.9274 5.28893 15.4783 0.839813 10.009 0.839813ZM14.0472 16.5676L12.8428 17.4177V20.6766H7.17515V17.4177L5.97077 16.5676C5.03205 15.9168 4.26472 15.0486 3.73425 14.037C3.20378 13.0254 2.92593 11.9005 2.92441 10.7582C2.92441 6.84753 6.0983 3.67364 10.009 3.67364C13.9197 3.67364 17.0936 6.84753 17.0936 10.7582C17.0936 13.0678 15.96 15.2357 14.0472 16.5676Z"
                  fill="#F5F5F5"
                />
              </svg>

              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8249 3.50143V0.582581C21.5067 1.87197 25.7433 6.94453 25.7433 13.0089C25.7433 19.0733 21.5067 24.1459 15.8249 25.4353V22.5164C19.9198 21.2979 22.9094 17.5005 22.9094 13.0089C22.9094 8.51731 19.9198 4.71997 15.8249 3.50143ZM0.2388 8.75818V17.2597H5.90646L12.991 24.3443V1.67361L5.90646 8.75818H0.2388ZM19.3672 13.0089C19.3669 11.8217 19.0351 10.6582 18.4093 9.64934C17.7834 8.64049 16.8884 7.8264 15.8249 7.29876V18.7049C17.9219 17.6706 19.3672 15.5169 19.3672 13.0089Z"
                  fill="#F5F5F5"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center text-2xl sm:text-3xl font-semibold min-h-64">
              <p>{dt.body}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between items-center mx-auto mt-9 px-5">
        <svg
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6"
        >
          <path
            d="M25.591 4.59365C24.2024 3.19562 22.5509 2.08626 20.7315 1.32955C18.9122 0.572829 16.9611 0.183719 14.9906 0.184648C6.69794 0.184648 0 6.90135 0 15.194C0 23.4867 6.69794 30.2034 14.9906 30.2034C21.9887 30.2034 27.8236 25.4192 29.4934 18.9464H25.591C24.8181 21.1406 23.3834 23.0409 21.4847 24.3851C19.586 25.7293 17.317 26.4511 14.9906 26.4511C8.78049 26.4511 3.73358 21.4042 3.73358 15.194C3.73358 8.9839 8.78049 3.93699 14.9906 3.93699C18.1051 3.93699 20.8818 5.23155 22.9081 7.27658L16.8668 13.3179H30V0.184648L25.591 4.59365Z"
            fill="url(#paint0_linear_1_169)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_169"
              x1="15"
              y1="0.184647"
              x2="15"
              y2="30.2034"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06286E" />
              <stop offset="1" stopColor="#164EC0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="flex items-center justify-center">
          <button
            onClick={() => handlePrev(sliderRef)}
            className="bg-gradient-to-t from-gradient-6 to-gradient-5 text-primary-color p-4 rounded-full"
          >
            <FaChevronLeft></FaChevronLeft>
          </button>
          <div className="swiper-custom-pagination mx-5 font-bold"></div>
          <button
            onClick={() => handleNext(sliderRef)}
            className="bg-gradient-to-t from-gradient-6 to-gradient-5 text-primary-color p-4 rounded-full"
          >
            <FaChevronRight></FaChevronRight>
          </button>
        </div>

        <svg
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.28571 10.9083H0V0.194031H10.7143V4.47974H4.28571V10.9083ZM0 19.4797H4.28571V25.9083H10.7143V30.194H0V19.4797ZM25.7143 25.9083H19.2857V30.194H30V19.4797H25.7143V25.9083ZM19.2857 4.47974V0.194031H30V10.9083H25.7143V4.47974H19.2857Z"
            fill="url(#paint0_linear_1_174)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_174"
              x1="15"
              y1="0.194031"
              x2="15"
              y2="30.194"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06286E" />
              <stop offset="1" stopColor="#164EC0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Study;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { StyledSwiperGallery } from "../styles/SwiperGallery.styled";
import PropTypes from "prop-types";

export default function SwiperGallery({ selectedGame }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Validation des props
  SwiperGallery.propTypes = {
    selectedGame: PropTypes.shape({
      footage: PropTypes.arrayOf(PropTypes.string),
    }),
  };

  return (
    <>
      <StyledSwiperGallery>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <div>
            {/* Utilisez selectedGame ici pour afficher des images ou d'autres informations */}
            {selectedGame &&
              selectedGame.footage.map((image, index) => (
                <SwiperSlide key={index}>
                  <img key={index} src={image} alt={`Image ${index + 1}`} />
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={0}
          slidesPerView={8}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <div>
            {/* Utilisez selectedGame ici pour afficher des images ou d'autres informations */}
            {selectedGame &&
              selectedGame.footage.map((image, index) => (
                <SwiperSlide key={index}>
                  <img key={index} src={image} alt={`Image ${index + 1}`} />
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </StyledSwiperGallery>
    </>
  );
}

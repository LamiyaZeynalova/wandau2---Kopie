import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperClass } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

import ArtSlide1 from "../../../../assets/images/image/art-slide01.jpg";
import ArtSlide2 from "../../../../assets/images/image/art-slide02.jpg";
import ArtSlide3 from "../../../../assets/images/image/art-slide03.jpg";
import ArtSlide4 from "../../../../assets/images/image/art-slide04.jpg";
import ArtSlide5 from "../../../../assets/images/image/art-slide05.jpg";

type Slide = {
  id: number;
  image: string;
  subtitle: string;
};

const slides: Slide[] = [
  { id: 1, image: ArtSlide1, subtitle: "VENUS <br/> DE MILO" },
  { id: 2, image: ArtSlide2, subtitle: "LES DEMOISELLES <br/> D'AVIGNON" },
  { id: 3, image: ArtSlide3, subtitle: "MONA <br/> LISA" },
  { id: 4, image: ArtSlide4, subtitle: "L'Arlesienne: <br/>" },
  { id: 5, image: ArtSlide5, subtitle: "Cuckoo <br /> Clocks" },
];

const Art: React.FC = () => {
  const mainSwiperRef = useRef<SwiperClass | null>(null);
  const textSwiperRef = useRef<SwiperClass | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const staticTitle = "History of Barnes";

  const handleTextSlideClick = (index: number) => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideToLoop(index);
    }
    if (textSwiperRef.current) {
      textSwiperRef.current.slideToLoop(index);
    }
    setActiveIndex(index);
  };

  const handleMainSlideChange = (swiper: SwiperClass) => {
    const realIndex = swiper.realIndex;

    setActiveIndex(realIndex);

    if (textSwiperRef.current) {
      textSwiperRef.current.slideToLoop(realIndex);
    }
  };

  return (
    <section className="art-collection-slider">
      <div className="art-collection-container">
        <div className="art-text-controls">
          <h1>{staticTitle}</h1>

          <Swiper
            onSwiper={(swiper) => {
              textSwiperRef.current = swiper;
            }}
            direction="vertical"
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            modules={[Navigation]}
            className="art-thumbs-swiper"
          >
            {slides.map((s, index) => (
              <SwiperSlide key={s.id}>
                <div
                  className={`art-control-slide ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleTextSlideClick(index)}
                >
                  <span className="slide-index">{`0${index + 1}`}</span>
                  <span
                    className="slide-subtitle"
                    dangerouslySetInnerHTML={{ __html: s.subtitle }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="art-image-display">
          <Swiper
            onSwiper={(swiper) => {
              mainSwiperRef.current = swiper;
            }}
            slidesPerView={1}
            onSlideChange={handleMainSlideChange}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            className="art-main-swiper"
          >
            {slides.map((s) => (
              <SwiperSlide key={s.id}>
                <div
                  className="image-slide"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Art;

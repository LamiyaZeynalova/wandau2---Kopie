import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";

import HeroSlide1 from "../../../../assets/images/image/homeSlide01.jpg";
import HeroSlide2 from "../../../../assets/images/image/homeSlide02.jpg";
import HeroSlide3 from "../../../../assets/images/image/homeSlide03.jpg";

type Slide = {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: HeroSlide1,
    title: "MUSEUMS AND GALLERIES",
    subtitle:
      "Explore hundreds of museums, galleries and historic <br/> places across the UK",
  },
  {
    id: 2,
    image: HeroSlide2,
    title: "DISCOVER OUR HISTORY",
    subtitle:
      "Your support is vital and helps the Museum to share <br/>  the collection with the world.",
  },
  {
    id: 3,
    image: HeroSlide3,
    title: "THE ART OF NORTH AFRICA",
    subtitle:
      "Curator Peter Loovers explores the special relationship between <br /> Arctic Peoples and 'man's best friend'.",
  },
];

const Hero: React.FC = () => (
  <section className="hero">
    <Swiper
      direction="vertical"
      slidesPerView={1}
      autoplay={{ delay: 3500 }}
      pagination={{
        clickable: true,

        bulletClass: "swiper-pagination-bullet hero-pagination-bullet",
        bulletActiveClass:
          "swiper-pagination-bullet-active hero-pagination-bullet-active",
      }}
      navigation={{
        nextEl: ".hero-next-button",
        prevEl: ".hero-prev-button",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="hero-swiper"
    >
      {slides.map((s) => (
        <SwiperSlide key={s.id}>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${s.image})` }}
          >
            <div className="hero-content">
              <h1>{s.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: s.subtitle! }} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="hero-arrows">
      <button className="hero-prev-button">
        <span>&#9650;</span>
      </button>

      <button className="hero-next-button">
        <span>&#9660;</span>
      </button>
    </div>
  </section>
);

export default Hero;

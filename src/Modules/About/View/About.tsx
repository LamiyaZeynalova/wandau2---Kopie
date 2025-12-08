

import { useEffect, useRef } from "react";
import centerImg from "../../../assets/images/image/centerLogo.jpg";
import aboutImage1 from "../../../assets/images/image/aboutImage01.jpg";
import aboutImage2 from "../../../assets/images/image/aboutImage02.jpg";
import aboutImage3 from "../../../assets/images/image/aboutImage03.jpg";
import womanWatch01 from "../../../assets/images/image/womenWatchimage01.jpg";
import womanWatch02 from "../../../assets/images/image/womenWatchimage02.jpg";
import womanWatch03 from "../../../assets/images/image/womenWatchimage03.jpg";
import leftImg from "../../../assets/images/image/leftSideIMG.jpg";
import icon1 from "../../../assets/images/icons/icon01.jpg";
import icon2 from "../../../assets/images/icons/icon02.jpg";
import icon3 from "../../../assets/images/icons/icon03.jpg";
import statue01 from "../../../assets/images/image/artThumb01.jpg";
import statue02 from "../../../assets/images/image/artThumb02.jpg";
import statue03 from "../../../assets/images/image/artThumb03.jpg";
import statue04 from "../../../assets/images/image/artThumb04.jpg";
import statue05 from "../../../assets/images/image/artThumb05.jpg";

const About = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const el = scrollRef.current;
          if (!el) {
            ticking.current = false;
            return;
          }

          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const start = rect.top - windowHeight;
          const progress = Math.max(0, -start);
          const speed = 0.25;

          const offset = (progress * speed) % el.scrollWidth;

          el.style.transform = `translateX(-${offset}px)`;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="about">
      <div className="container">
        <div className="heroAbout">
          <div className="row">
            <h2 className="aboutTitle">About Us</h2>
            <div className="lineP">
              <div className="line"></div>
              <p>
                For the latest updates about reopening, booking tickets and
                what's <br />
                happening at the Museum, sign up to our newsletter
              </p>
            </div>
          </div>
          <div className="greenShape"></div>
        </div>

        <div className="secondPart">
          <div className="formTittle">
            <div className="centerImg">
              <img src={centerImg} alt="logoSmall" />
            </div>
            <div className="centerTitle">
              <h2>
                National Museum of <br /> Women in the Arts
              </h2>
            </div>
          </div>

          {/* Scroll hərəkətini sonsuz şəkilləri iki dəfə təkrarlayırıq */}
          <div className="scrollImgsWrapper">
            <div className="scrollImgs" ref={scrollRef}>
              {[
                aboutImage1,
                aboutImage2,
                aboutImage3,
                aboutImage1,
                aboutImage2,
                aboutImage3,
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`statue-${index}`}
                  className={index % 3 === 1 ? "secondImg" : ""}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="womenToWatch">
          <p>DON’T MISS THE OPPORTUNITY</p>
          <h2>Women To Watch</h2>
          <div className="gridImg">
            <div className="gridCard">
              <img src={womanWatch01} alt="womanStatue" />
              <h4>2023: PAPER WORK</h4>
              <p>Read More</p>
            </div>

            <div className="gridCard">
              <img src={womanWatch02} alt="womanStatue" />
              <h4>2018: METAL</h4>
              <p>Read More</p>
            </div>

            <div className="gridCard">
              <img src={womanWatch03} alt="womanStatue" />
              <h4>2015: ORGANIC MATTERS </h4>
              <p>Read More</p>
            </div>
          </div>
        </div>

        <div className="visitImgPart">
          <div className="row">
            <div className="leftSide">
              <div className="leftImg">
                <img src={leftImg} alt="girlStatue" />
              </div>
              <div className="leftInfo">
                <div className="infoBlock">
                  <div className="leftInfoImg">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="infoText">
                    <h5>Opening times</h5>
                    <p>From 27 August</p>
                    <p>Thursday – Sunday: 11.00-19.00</p>
                  </div>
                </div>

                <div className="infoBlock">
                  <div className="leftInfoImg">
                    <img src={icon2} alt="" />
                  </div>
                  <div className="infoText">
                    <h5>Book Online</h5>
                    <p>
                      Some exhibitions and events carry <br />a separate charge
                    </p>
                    <a href="">Join Now and Book Online</a>
                  </div>
                </div>

                <div className="infoBlock">
                  <div className="leftInfoImg">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="infoText">
                    <h5>Where You Visit</h5>
                    <p>Cromwell New Street Road</p>
                    <p>London, SW7 2RL</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightSide">
              <div className="rightSideTitle">
                <p>Visit the Wandau Museum</p>
                <h3>Antique Piece</h3>
              </div>
              <div className="rightSideImg">
                <img src={statue01} alt="statue" />

                <img src={statue02} alt="statue" />

                <img src={statue03} alt="statue" />

                <img src={statue04} alt="statue" />

                <img src={statue05} alt="statue" />
              </div>
            </div>
          </div>
        </div>

        <div className="numbersPart">
          <div className="numbers">
            <div className="numbersInfo">
              <h6>15 K</h6>
              <h5>MORE THAN 15,000 <br />MEMBERS</h5>
              <div className="greenTop"></div>
            </div>
            <div className="numbersInfo">
              <h6>3 M</h6>
              <h5>3 MILLION <br />VISITORS</h5>
              <div className="greenTop"></div>
            </div>
            <div className="numbersInfo">
              <h6>5,500 +</h6>
              <h5>MORE THAN 5.500 <br />COLLECTION</h5>
              <div className="greenTop"></div>
            </div>
            <div className="numbersInfo">
              <h6>800 K</h6>
              <h5>DAILY TICKET <br /> SALES</h5>
              <div className="greenTop"></div>
            </div>
          </div>
        </div>

        <div className="lastPart">
          <div className="backImg"></div>
          <div className="greenText">
            <h4>Free Entry to Exhibitions</h4>
            <p>Become a member today to gain unlimited free entry to all of our blockbuster exhibitions at National Museums Wandau including AI: More than Human and Linda McCartney Retrospective. <b>Join today!</b> </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

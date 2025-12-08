import logo from "../../../../assets/images/image/centerLogo.jpg";
import sideImage from "../../../../assets/images/image/side-image01.jpg";
import icon1 from "../../../../assets/images/icons/icon01.jpg";
import icon2 from "../../../../assets/images/icons/icon02.jpg";
import icon3 from "../../../../assets/images/icons/icon03.jpg";

import { useEffect, useRef } from "react";

const Museum = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);

  const topSpeed = 0.05;
  const rightSideSpeed = 0.05;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (topRef.current) {
        topRef.current.style.transform = `translateY(-${scrollY * topSpeed}px)`;
      }

      if (rightSideRef.current) {
        rightSideRef.current.style.transform = `translateY(-${
          scrollY * rightSideSpeed
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="museum">
      <div className="container">
        <div className="row">
          <div className="top" ref={topRef}>
            <img src={logo} alt="logo" />
            <h2 className="title">
              The world's leading <br /> museum of art
            </h2>
          </div>

          <div className="bottom">
            <div className="letfSide">
              <img src={sideImage} alt="museum" />
            </div>

            <div className="rightSide" ref={rightSideRef}>
              <div className="time">
                <div className="logo">
                  <img src={icon1} alt="icon" />
                  <div className="desc">
                    <h4 className="smallTitle">Opening times</h4>
                    <p className="text">
                      From 27 August <br /> Thursday – Sunday: 11.00-19.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="book">
                <div className="logo">
                  <img src={icon2} alt="icon" />
                  <div className="desc">
                    <h4 className="smallTitle">Book Online</h4>
                    <p className="text">
                      Some exhibitions and events carry <br /> a separate charge
                    </p>
                  </div>
                </div>
              </div>
              <div className="visit">
                <div className="logo">
                  <img src={icon3} alt="icon" />
                  <div className="desc">
                    <h4 className="smallTitle">Where You Visit</h4>
                    <p className="text">
                      Cromwell New Street Road <br /> London, SW7 2RL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Museum;

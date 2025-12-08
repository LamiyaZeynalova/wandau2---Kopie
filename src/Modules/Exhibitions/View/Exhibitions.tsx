

import exhibitions1 from "../../../assets/images/image/artThumb01.jpg";
import exhibitions2 from "../../../assets/images/image/exhibitions02.jpg";
import exhibitions3 from "../../../assets/images/image/exhibitions03.jpg";
import exhibitions4 from "../../../assets/images/image/exhibitions04.jpg";
import exhibitions5 from "../../../assets/images/image/aboutImage03.jpg";
import exhibitions6 from "../../../assets/images/image/aboutImage02.jpg";
import exhibitions7 from "../../../assets/images/image/exhibitions07.jpg";
import exhibitions8 from "../../../assets/images/image/aboutImage01.jpg";
import exhibitions9 from "../../../assets/images/image/artThumb02.jpg";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Exhibitions = () => {
  const middleColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!middleColRef.current) return;

      const scrollY = window.scrollY;

      
      const parallaxSpeed = 0.12;

      middleColRef.current.style.transform = `translateY(-${
        scrollY * parallaxSpeed
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate()

  return (
    <section className="exhibitions">
        <div className="container">
         <div className="heroExhibitions">
           
           <div className="row">
             <h2 className="exhibitionsTitle">Exhibitions</h2>
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
      <div className="exhibitionsBox">
        <div className="exhibitionsRow">

          
          <div className="col left-col">
            <div className="boxOne"  onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions1} alt="" />
              <h4>Artemisia Gentileschi talk with Maria</h4>
              <p>15 August - 31 October 2020</p>
            </div>

            <div className="boxFour" onClick={() => navigate("/exhibitionsDetails")} >
              <img src={exhibitions4} alt="" />
              <h4>Artemisia Gentileschi talk with Maria</h4>
              <p>15 August - 31 October 2020</p>
            </div>

            <div className="boxSeven" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions7} alt="" />
              <h4>Artemisia Gentileschi talk with Maria</h4>
              <p>15 August - 31 October 2020</p>
            </div>
          </div>

          {/* ORTA SÜTUN — PARALLAX */}
          <div className="col middle-col" ref={middleColRef}>
            <div className="boxTwo" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions2} alt="" />
              <h4>Arctic culture and climate Exhibition</h4>
              <p>22 Oct 2020 - 21 Feb 2023</p>
            </div>

            <div className="boxFive" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions5} alt="" />
              <h4>Arctic culture and climate Exhibition</h4>
              <p>22 Oct 2020 - 21 Feb 2023</p>
            </div>

            <div className="boxEight" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions8} alt="" />
              <h4>Arctic culture and climate Exhibition</h4>
              <p>22 Oct 2020 - 21 Feb 2023</p>
            </div>
          </div>

          {/* SABİT */}
          <div className="col right-col">
            <div className="boxThree" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions3} alt="" />
              <h4>Thomas Becket murder and the making of a saint</h4>
              <p>22 Apr 2023 - 22 Aug 2023</p>
            </div>

            <div className="boxSix" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions6} alt="" />
              <h4>Thomas Becket murder and the making of a saint</h4>
              <p>22 Apr 2023 - 22 Aug 2023</p>
            </div>

            <div className="boxNine" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions9} alt="" />
              <h4>Thomas Becket murder and the making of a saint</h4>
              <p>22 Apr 2023 - 22 Aug 2023</p>
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
};

export default Exhibitions;
import letterImg from "../assets/images/image/newsletter-image.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="greenZone">
        <div className="container">
          <div className="row">
            <div className="letterInfo">
              <p>Subscribe Newsletter</p>
              <h2>
                Sign up to get the <span>latest news</span>
              </h2>
              <form action="">
                <div className="inputWrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your e-mail address"
                    required
                  />
                  <button type="submit">SIGN UP</button>
                </div>
              </form>
              <p className="textP">
                Will be used in accordance with our
                <a href="">Privacy Policy</a>
              </p>
            </div>
            <div className="letterImg">
              <img src={letterImg} alt="letterGirl" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="footerContent">
            <h4>About Museum</h4>
            <div className="lineFooter"></div>
            <nav className="navBar">
              <ul className="navList">
                <li className="navItem">
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li className="navItem">
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li className="navItem">
                  <Link to={"/shop"}>National Work</Link>
                </li>
                <li className="navItem">
                  <Link to={"/contact"}>International Work</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footerContent">
            <h4>Connect Us</h4>
            <div className="lineFooter"></div>
            <ul className="ulFooter">
              <li className="liFooter">
                <a href="https://ru-ru.facebook.com/" target="_blank">
                  <FaFacebookF /> /wandau-uk
                </a>
              </li>
              <li className="liFooter">
                <a href="https://x.com/" target="_blank">
                  <FaTwitter />
                  /wandau-museum{" "}
                </a>
              </li>
              <li className="liFooter">
                <a href="https://www.youtube.com/" target="_blank">
                  <FaYoutube />
                  /wandau-tv
                </a>
              </li>
            </ul>
          </div>
          <div className="footerContent">
            <h4>Visit Us Now</h4>
            <div className="lineFooter"></div>
            <p>Cromwell Road New Town SW7</p>
            <span>London - England</span>
            <p>
              <FaCircleInfo /> +44 (0)20 7942 2000
            </p>
          </div>
        </div>
        <hr />
        <hr />
        <div className="lastPart">
          <p>© 2023 Wandau | Art & History Museum</p>
          <p>Site created by<a href="">themezinho</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

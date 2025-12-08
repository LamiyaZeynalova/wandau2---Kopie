import { Link } from "react-router-dom";
import logo from "../../../../assets/images/image/centerLogo.jpg";
import news01 from "../../../../assets/images/image/news01.jpg";
import news02 from "../../../../assets/images/image/news02.jpg";

const News = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="sectionTitle">
            <p className="text">Get Latest Updates and News</p>
            <h2 className="title">Recent News</h2>
          </div>
          <div className="top">
            <div className="left">
              <span className="date">Dec 26, 2020</span>
              <h3 className="topTitle">
                The Ultimate Guide To Knots Practice Kit
              </h3>
              <p className="topText">
                Learn to tie over 250 knots with step-by-step instructions.
                Supplied with 4...
              </p>
              <Link to="/">
                <span>Continue reading</span>
              </Link>
            </div>
            <div className="right">
              <img src={news01} alt="news" />
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <img src={news02} alt="news" />
            </div>

            <div className="right">
              <span className="date">Dec 26, 2020</span>
              <h3 className="bottomTitle">
                The Ultimate Guide To Knots Practice Kit
              </h3>
              <p className="bottomText">
                Learn to tie over 250 knots with step-by-step instructions.
                Supplied with 4...
              </p>
              <Link to="/">
                <span>Continue reading</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

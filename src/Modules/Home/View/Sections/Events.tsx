import { Link } from "react-router-dom";
import logo from "../../../../assets/images/image/centerLogo.jpg";
import Event1 from "../../../../assets/images/image/artThumb01.jpg";
import Event2 from "../../../../assets/images/image/exhibitions02.jpg";
import Event3 from "../../../../assets/images/image/exhibitions03.jpg";

const Events = () => {
  return (
    <section className="events">
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="sectionTitle">
            <p className="text">DON’T MISS THE OPPORTUNITY</p>
            <h2 className="title">Upcoming Events</h2>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="imgContainer">
                <img src={Event1} alt="event" />
              </div>
              <h3 className="boxTitle">
                Artemisia Gentileschi talk with Maria
              </h3>
              <div className="date">15 August – 31 October 2020</div>
            </div>
            <div className="box">
              <div className="imgContainer">
                <img src={Event2} alt="event" />
              </div>
              <h3 className="boxTitle">
                Arctic culture and climate Exhibition
              </h3>
              <div className="date">22 Oct 2020 - 21 Feb 2023</div>
            </div>
            <div className="box">
              <div className="imgContainer">
                <img src={Event3} alt="event" />
              </div>
              <h3 className="boxTitle">
                Thomas Becket murder and the making of a saint
              </h3>
              <div className="date">22 Apr 2023 - 22 Aug 2023</div>
            </div>
          </div>
          <Link to="/exhibitions">
            <span>VIEW ALL UPCOMING EVENTS</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;

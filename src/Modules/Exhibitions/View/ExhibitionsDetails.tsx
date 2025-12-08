import icon1 from "../../../assets/images/icons/icon01.jpg";
import leftImg from "../../../assets/images/image/leftSideIMG.jpg";
import exhibitionsDetails from "../../../assets/images/image/artThumb05.jpg";
import centerImg from "../../../assets/images/image/centerLogo.jpg";
import dino from "../../../assets/images/image/dinoDino.jpg";
const Exhibitions = () => {
  return (
    <section className="exhibitionsDetails">
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
        {/* end hero  */}

        <div className="firstPart">
          <div className="leftInfo">
            <p className="discount">50% off exhibitions</p>
            <h4 className="eventTitle">
              Artemisia Gentileschi talk with Maria
            </h4>
            <p className="desc">
              Beautiful paintings, sculpture and decorative art from the 13th
              century to the present day.
            </p>

            <div className="eventDetails">
              <ul>
                <li>
                  <strong>START</strong> : 15 November 2020
                </li>
                <li>
                  <strong>END</strong> : 25 November 2020
                </li>
                <li>
                  <strong>EVENT CATEGORY</strong> : Exhibition
                </li>
                <li>
                  <strong>VENUE NAME</strong> : Tate Modern
                </li>
              </ul>
            </div>

            <div className="openingTimes">
              <img src={icon1} alt="" />
              <div>
                <h6>Opening Times</h6>
                <p>From 27 August</p>
                <p>Thursday - Sunday: 11.00-19.00</p>
              </div>
            </div>
          </div>

          <div className="rightImg">
            <img src={leftImg} alt="girlStatue" />
          </div>
        </div>

        <div className="mainPart">
          <h3>Exhibitions Details</h3>
          <p>
            This exhibition is a rare chance to experience two of Yayoi Kusama’s
            Infinity Mirror Rooms. These immersive installations will transport
            you into Kusama’s unique vision of endless reflections.
          </p>
          <p>
            Infinity Mirrored Room – Filled with the Brilliance of Life is one
            of Kusama’s largest installations to date and was made for her 2012
            retrospective at the gallery. It is shown alongside Chandelier of
            Grief, a room which creates the illusion of a boundless universe of
            rotating crystal chandeliers.
          </p>
          <p>
            A small presentation of photographs – some on display for the first
            time – provides historical context for the global phenomenon that
            Kusama’s mirrored rooms have become today.
          </p>
        </div>

        <div className="mainPartDetails">
          <div className="imgLeft">
            <img src={exhibitionsDetails} alt="statue" />
          </div>
          <div className="info">
            <p>
              <strong>This exhibition</strong> is a rare chance to experience
              two of Yayoi Kusama’s Infinity Mirror Rooms. These immersive
              installations will transport you into Kusama’s.
            </p>
            <p>
              {" "}
              <strong>Architectural</strong> elements and armatures. Bhabha’s
              multifaceted work explores colonialism, war, displacement and the
              memory of home. For her first major survey exhibition in Europe.
            </p>
            <p>
              {" "}
              <strong>These immersive</strong> installations will transport you
              into Kusama’s. This exhibition is a rare chance to experience two
              of Yayoi Kusama’s Infinity Mirror Rooms.
            </p>
          </div>
        </div>

        <div className="formTittle">
          <div className="centerImg">
            <img src={centerImg} alt="logoSmall" />
          </div>
          <div className="centerTitle">
            <h2>
              Wandau Museum <br />
              Now Open
            </h2>
          </div>
        </div>

        <div className="exhibitionsImg">
          <img src={dino} alt="dino" />
        </div>

        <div className="lastPart">
          <h3>Permanent Collection</h3>
          <p>
            Housing a national collection, Tate Britain is the world centre for
            the study and display of British art. Highlights include a Turner
            collection of more than 300 paintings and thousands of watercolours,
            with considerable space also dedicated to two artists of the
            Romantic age, Constable and William Blake.
          </p>
          <p>
            The national tradition of portraiture is represented in a fine
            collection of Elizabethan works, as well as those by Gainsborough,
            Reynolds, and Hogarth 'the father of English painting' whose
            much-loved Rake's Progress sequence remains a popular draw.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;

import video from "../../../../assets/video/video.mp4";

function Join() {
  return (
    <section className="join">
      <div className="video-bg">
        <video
          src={video}
          loop
          autoPlay
          playsInline
          muted
          className="video"
        ></video>
      </div>

      <div className="container">
        <div className="cta-box">
          <h6>JOIN TODAY AND ENJOY UNLIMITED</h6>
          <h2>exhibitions, Members only and more</h2>
          <a href="#" className="custom-button">
            BECOME A MEMBER
          </a>{" "}
        </div>
      </div>
    </section>
  );
}

export default Join;

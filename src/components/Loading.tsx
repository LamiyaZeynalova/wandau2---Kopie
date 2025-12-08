import preloader from "../assets/images/image/preloader.png";
const Loading = () => {
  return (
    <div className="loading">
      <div className="circle">
        <div className="load">
          <img src={preloader} alt="loading" />
        </div>
      </div>
      <span>LOADING</span>
    </div>
  );
};

export default Loading;

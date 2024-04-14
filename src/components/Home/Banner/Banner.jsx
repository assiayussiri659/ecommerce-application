import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SELES</h1>
          <p></p>
          <div className="ctas">
            <div className="banner-cat">
              <Link to="/login">Login Now</Link>
            </div>
            <div className="banner-cat v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;

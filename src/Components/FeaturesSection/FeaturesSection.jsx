import { Link } from "react-router-dom";
import "./style.css";

const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line" Style={{color: "#ffbb2c"}}></i>
              <h3>
                <Link href="">Lorem Ipsum</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line" Style="color: #5578ff;"></i>
              <h3>
                <Link href="">Dolor Sitema</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-calendar-todo-line" Style="color: #e80368;"></i>
              <h3>
                <Link href="">Sed perspiciatis</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="ri-paint-brush-line" Style="color: #e361ff;"></i>
              <h3>
                <Link href="">Magni Dolores</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-database-2-line" Style="color: #47aeff;"></i>
              <h3>
                <Link href="">Nemo Enim</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-gradienter-line" Style="color: #ffa76e;"></i>
              <h3>
                <Link href="">Eiusmod Tempor</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-file-list-3-line" Style="color: #11dbcf;"></i>
              <h3>
                <Link href="">Midela Teren</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-price-tag-2-line" Style="color: #4233ff;"></i>
              <h3>
                <Link href="">Pira Neve</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-anchor-line" Style="color: #b2904f;"></i>
              <h3>
                <Link href="">Dirada Pack</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-disc-line" Style="color: #b20969;"></i>
              <h3>
                <Link href="">Moton Ideal</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-base-station-line" Style="color: #ff5828;"></i>
              <h3>
                <Link href="">Verdo Park</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-fingerprint-line" Style="color: #29cc61;"></i>
              <h3>
                <Link href="">Flavor Nivelanda</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

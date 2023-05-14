import { Link } from "react-router-dom";
import "./style.css";
import FeaturesItem from "./FeaturesItem";

const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <FeaturesItem
            title="Lorem Ipsum"
            icon="ri-store-line"
            color="#ffbb2c"
          />
          <FeaturesItem
            title="Dolor Sitema"
            icon="ri-bar-chart-box-line"
            color="#5578ff"
          />
          <FeaturesItem
            title="Sed perspiciatis"
            icon="ri-calendar-todo-line"
            color="#e80368"
          />
          <FeaturesItem
            title="Magni Dolores"
            icon="ri-paint-brush-line"
            color="#e361ff"
          />
          <FeaturesItem
            title="Nemo Enim"
            icon="ri-database-2-line"
            color="#47aeff"
          />
          <FeaturesItem
            title="Eiusmod Tempor"
            icon="ri-gradienter-line"
            color="#ffa76e"
          />
          <FeaturesItem
            title="Midela Teren"
            icon="ri-file-list-3-line"
            color="#11dbcf"
          />
          <FeaturesItem
            title="Pira Neve"
            icon="ri-price-tag-2-line"
            color="#4233ff"
          />
          <FeaturesItem
            title="Dirada Pack"
            icon="ri-anchor-line"
            color="#b2904f"
          />
          <FeaturesItem
            title="Moton Ideal"
            icon="ri-disc-line"
            color="#b20969"
          />
          <FeaturesItem
            title="Verdo Park"
            icon="ri-base-station-line"
            color="#ff5828"
          />
          <FeaturesItem
            title="Flavor Nivelanda"
            icon="ri-fingerprint-line"
            color="#29cc61"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

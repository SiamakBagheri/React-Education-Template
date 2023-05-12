import "./style.css";

const CountsSection = () => {
  return (
    <section id="counts" className="counts section-bg">
      <div className="container">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="1232"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Students</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="64"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Courses</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="42"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Events</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start="0"
              data-purecounter-end="15"
              data-purecounter-duration="1"
              className="purecounter"
            ></span>
            <p>Trainers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountsSection;

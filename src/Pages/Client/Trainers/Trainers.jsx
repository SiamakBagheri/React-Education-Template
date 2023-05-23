import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import TrainersCard from "../../../Components/TrainersCard/TrainersCard";

const Trainers = () => {
  return (
    <>
      <Breadcrumbs title="Trainers">
        Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
        id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
        aperiam consequatur laboriosam nemo harum praesentium.
      </Breadcrumbs>
      <section id="trainers" className="trainers">
        <div className="container" data-aos="fade-up">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <TrainersCard
              img="assets/img/trainers/trainer-1.jpg"
              title="Walter White"
              category="Web Development"
              description="Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut"
            >
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </TrainersCard>

            <TrainersCard
              img="assets/img/trainers/trainer-2.jpg"
              title="Sarah Jhinson"
              category="Marketing"
              description="Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus"
            >
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </TrainersCard>

            <TrainersCard
              img="assets/img/trainers/trainer-3.jpg"
              title="William Anderson"
              category="Content"
              description="Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara"
            >
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </TrainersCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainers;

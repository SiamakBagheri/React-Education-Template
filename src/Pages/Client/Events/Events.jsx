import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import EventsCard from "../../../Components/EventsCard/EventsCard";
import "./style.css"

const Events = () => {
  return (
    <>
      <Breadcrumbs title="Events">
        Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
        id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
        aperiam consequatur laboriosam nemo harum praesentium.
      </Breadcrumbs>
      <section id="events" class="events">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <EventsCard
              img="assets/img/events-1.jpg"
              title="Introduction to webdesign"
              date="Sunday, September 26th at 7:00 pm"
            >
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat
            </EventsCard>
            <EventsCard
              img="assets/img/events-2.jpg"
              title="Marketing Strategies"
              date="Sunday, November 15th at 7:00 pm"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo
            </EventsCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;

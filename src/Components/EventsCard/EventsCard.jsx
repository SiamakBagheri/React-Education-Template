const EventsCard = ({ img, title, date, children }) => {
  return (
    <div class="col-md-6 d-flex align-items-stretch">
      <div class="card">
        <div class="card-img">
          <img src={img} alt={title} />
        </div>
        <div class="card-body">
          <h5 class="card-title">
            <a href="">{title}</a>
          </h5>
          <p class="fst-italic text-center">{date}</p>
          <p class="card-text">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;

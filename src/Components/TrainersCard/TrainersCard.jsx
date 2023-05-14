const TrainersCard = ({ title, category, img, description, children }) => {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="member">
        <img src={img} className="img-fluid" alt={title} />
        <div className="member-content">
          <h4>{title}</h4>
          <span>{category}</span>
          <p>{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default TrainersCard;

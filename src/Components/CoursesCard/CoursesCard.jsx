const CoursesCard = ({
  img,
  category,
  price,
  title,
  description,
  authorName,
  authorImg,
  customCols,
}) => {
  return (
    <div className={`${customCols} d-flex align-items-stretch`}>
      <div className="course-item">
        <img src={img} className="img-fluid" alt="..." />
        <div className="course-content">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>{category}</h4>
            <p className="price">${price}</p>
          </div>

          <h3>
            <a href="course-details.html">{title}</a>
          </h3>
          <p>{description}</p>
          <div className="trainer d-flex justify-content-between align-items-center">
            <div className="trainer-profile d-flex align-items-center">
              <img src={authorImg} className="img-fluid" alt="" />
              <span>{authorName}</span>
            </div>
            <div className="trainer-rank d-flex align-items-center">
              <i className="bx bx-user"></i>&nbsp;50 &nbsp;&nbsp;
              <i className="bx bx-heart"></i>&nbsp;65
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;

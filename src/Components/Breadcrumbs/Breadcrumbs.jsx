const Breadcrumbs = ({ title, children }) => {
  return (
    <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Breadcrumbs;

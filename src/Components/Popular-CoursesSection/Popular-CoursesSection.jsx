import CoursesCard from "../CoursesCard/CoursesCard";
import "./style.css";

const PopularCoursesSection = () => {
  return (
    <section id="popular-courses" className="courses">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Courses</h2>
          <p>Popular Courses</p>
        </div>

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <CoursesCard
            img="assets/img/course-1.jpg"
            category="Web Development"
            price="169"
            title="Website Design"
            description="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore."
            authorName="Siamak Bagheri"
            authorImg="assets/img/trainers/trainer-1.jpg"
            customCols="col-lg-4 col-md-6"
          />

          <CoursesCard
            img="assets/img/course-2.jpg"
            category="Marketing"
            price="250"
            title="Search Engine Optimization"
            description="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore."
            authorName="lana"
            authorImg="assets/img/trainers/trainer-2.jpg"
            customCols="col-lg-4 col-md-6"
          />

          <CoursesCard
            img="assets/img/course-3.jpg"
            category="Content"
            price="195"
            title="Copywriting"
            description="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore."
            authorName="Brandon"
            authorImg="assets/img/trainers/trainer-3.jpg"
            customCols="col-lg-4 col-md-6"
          />
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;

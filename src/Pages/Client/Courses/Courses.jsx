import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import CoursesCard from "../../../Components/CoursesCard/CoursesCard";

const Courses = () => {
  return (
    <>
      <Breadcrumbs title="Courses">
        Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
        id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
        aperiam consequatur laboriosam nemo harum praesentium.
      </Breadcrumbs>

      <section id="courses" class="courses">
        <div class="container" data-aos="fade-up">
          <div class="row" data-aos="zoom-in" data-aos-delay="100">
            <CoursesCard
              img="assets/img/course-1.jpg"
              category="Web Development"
              price="169"
              title="Website Design"
              description="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore."
              authorName="Siamak"
              authorImg="assets/img/trainers/trainer-1.jpg"
              customCols="col-lg-3 col-md-4"
            />

            <CoursesCard
              img="assets/img/course-2.jpg"
              category="Marketing"
              price="250"
              title="Search Engine Optimization"
              description="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore."
              authorName="lana"
              authorImg="assets/img/trainers/trainer-2.jpg"
              customCols="col-lg-3 col-md-4"
            />

            <CoursesCard
              img="assets/img/course-3.jpg"
              category="Content"
              price="195"
              title="Copywriting"
              description="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore."
              authorName="Brandon"
              authorImg="assets/img/trainers/trainer-3.jpg"
              customCols="col-lg-3 col-md-4"
            />

            <CoursesCard
              img="assets/img/course-2.jpg"
              category="Marketing"
              price="250"
              title="Search Engine Optimization"
              description="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore."
              authorName="lana"
              authorImg="assets/img/trainers/trainer-2.jpg"
              customCols="col-lg-3 col-md-4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;

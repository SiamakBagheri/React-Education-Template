import AboutSectoin from "../../../Components/AboutSection/AboutSectoin";
import CountsSection from "../../../Components/CountsSection/CountsSection";
import FeaturesSection from "../../../Components/FeaturesSection/FeaturesSection";
import PopularCoursesSection from "../../../Components/Popular-CoursesSection/Popular-CoursesSection";
import TrainersSection from "../../../Components/TrainersSection/TrainersSection";
import WhyUsSection from "../../../Components/Why-usSection/Why-usSection";

const Home = () => {
  return (
    <>
      <AboutSectoin />
      <CountsSection />
      <WhyUsSection />
      <FeaturesSection />
      <PopularCoursesSection />
      <TrainersSection />
    </>
  );
};

export default Home;

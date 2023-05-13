import { useRoutes, useLocation } from "react-router-dom";
import Hero from "../../../Components/Hero/Hero";
import router from "../../../routes";

const Main = () => {
  let element = useRoutes(router);
  let PageCheck = useLocation();
  return (
    <main id="main">
      {PageCheck.pathname === "/" ? <Hero /> : null}
      {element}
    </main>
  );
};

export default Main;

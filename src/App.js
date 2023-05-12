import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";
import "./App.css";
import Header from "./Layout/Home/Header/Header";
import Hero from "./Components/Hero/Hero";
import Main from "./Layout/Home/Main/Main";
import Footer from "./Layout/Home/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    const pure = new PureCounter();
  });

  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default App;

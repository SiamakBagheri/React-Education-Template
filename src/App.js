import { useEffect } from "react";
import Header from "./Layout/Client/Header/Header";
import Main from "./Layout/Client/Main/Main";
import Footer from "./Layout/Client/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

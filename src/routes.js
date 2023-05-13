import Home from "./Pages/Client/Home/Home";
import About from "./Pages/Client/About/About";
import Courses from "./Pages/Client/Courses/Courses";
import Trainers from "./Pages/Client/Trainers/Trainers";
import Events from "./Pages/Client/Events/Events";
import Pricing from "./Pages/Client/Pricing/Pricing";
import Contact from "./Pages/Client/Contact/Contact";

const router = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/courses", element: <Courses /> },
  { path: "/trainers", element: <Trainers /> },
  { path: "/events", element: <Events /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/contact", element: <Contact /> },
];

export default router;

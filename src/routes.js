import Home from "./Pages/Client/Home/Home";
import About from "./Pages/Client/About/About";
import Courses from "./Pages/Client/Courses/Courses";
import Course from "./Pages/Client/Course/Course";
import Trainers from "./Pages/Client/Trainers/Trainers";
import Events from "./Pages/Client/Events/Events";
import Pricing from "./Pages/Client/Pricing/Pricing";
import Contact from "./Pages/Client/Contact/Contact";
import Login from "./Pages/Client/Login/Login";
import Register from "./Pages/Client/Register/Register";

const router = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/courses", element: <Courses /> },
  { path: "/course/:courseName", element: <Course /> },
  { path: "/trainers", element: <Trainers /> },
  { path: "/events", element: <Events /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <Home /> },
];

export default router;

import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Summary } from "./pages/Summary";
import {
  about_me,
  skills,
  education,
  experiences,
  footer,
} from "./assets/data/constants";
import "./styles/styles.css";

export const App = () => {
  return (
    <>
      <SideBar />
      <div className="main position-relative d-flex flex-column px-md-3 px-xl-5">
        <Home />
        <About constant={about_me} />
        <Skills constant={skills} />
        <Summary education={education} experiences={experiences} />
        <Projects />
      </div>
      <Footer constant={footer} />
    </>
  );
};

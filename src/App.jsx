import { SideBar } from "./components/SideBar"
import { StarsBg } from "./components/StarsBg"
import { ToggleBtn } from "./components/ToggleBtn"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Education } from "./pages/Education"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { Skills } from "./pages/Skills"
import "./styles/styles.css"

export const App = () => {
    return (
        <>
            <StarsBg />
            <SideBar />
            <div className="main position-relative d-flex flex-column px-5">
                <Home />
                <About />
                <Skills />
                <Education />
                <Projects />
                <Contact />
            </div>
            <ToggleBtn />
        </>
    )
}

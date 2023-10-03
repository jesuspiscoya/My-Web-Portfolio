import { Footer } from "./components/Footer"
import { SideBar } from "./components/SideBar"
import { ToggleBtn } from "./components/ToggleBtn"
import { About } from "./pages/About"
import { Education } from "./pages/Education"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { Skills } from "./pages/Skills"
import "./styles/styles.css"

export const App = () => {
    return (
        <>
            <SideBar />
            <div className="main position-relative d-flex flex-column px-5">
                <Home />
                <About />
                <Skills />
                <Education />
                <Projects />
            </div>
            <Footer />
            <ToggleBtn />
        </>
    )
}

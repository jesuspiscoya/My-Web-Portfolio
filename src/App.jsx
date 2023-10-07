import { Footer } from "./components/Footer"
import { SideBar } from "./components/SideBar"
import { ToggleBtn } from "./components/ToggleBtn"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { Skills } from "./pages/Skills"
import { Summary } from "./pages/Summary"
import "./styles/styles.css"

export const App = () => {
    return (
        <>
            <ToggleBtn />
            <SideBar />
            <div className="main position-relative d-flex flex-column px-md-3 px-xl-5">
                <Home />
                <About />
                <Skills />
                <Summary />
                <Projects />
            </div>
            <Footer />
        </>
    )
}

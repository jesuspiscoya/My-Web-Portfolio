import { SideBar } from "./components/SideBar"
import { StarsBg } from "./components/StarsBg"
import { ToggleBtn } from "./components/ToggleBtn"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
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
            </div>
            <ToggleBtn />
        </>
    )
}

export const ToggleBtn = () => {
    const clickToggle = () => {
        const sideBar = document.querySelector(".sidebar")
        const sideBarMovil = document.querySelector(".sidebar-movil")
        const main = document.querySelector(".main")
        const footer = document.querySelector(".footer")
        sideBar.classList.toggle("active")
        sideBarMovil.classList.toggle("active")
        main.classList.toggle("active")
        footer.classList.toggle("active")
    }

    return (
        <div className="toggle position-fixed" onClick={clickToggle}>
            <i className="fa-solid fa-bars-staggered fa-xl"></i>
        </div>
    )
}

export const ToggleBtn = () => {
    const clickToggle = () => {
        const sideBar = document.querySelector(".sidebar")
        const main = document.querySelector(".main")
        const toggle = document.querySelector(".toggle")
        sideBar.classList.toggle("active")
        main.classList.toggle("active")
        toggle.classList.toggle("active")
    }

    return (
        <div className="toggle position-fixed" onClick={clickToggle}>
            <i className="fa-solid fa-bars-staggered fa-xl"></i>
        </div>
    )
}

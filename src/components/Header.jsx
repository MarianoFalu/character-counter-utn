import logo from "../assets/img/logo.png"

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
                <h1>Character Counter</h1>
            </div>

            <button>⚙️</button>
        </header>
    )
}

export { Header }
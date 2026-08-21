import logo from "../assets/img/logo.png"

const Header = ({ dark, handleDarkTheme }) => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Character Counter logo" />
                <h1>Character Counter</h1>
            </div>

            <button onClick={() => handleDarkTheme(!dark)}>
                ☀
            </button>
        </header>
    )
}

export { Header }
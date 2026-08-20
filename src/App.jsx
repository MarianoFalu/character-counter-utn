import { Header } from "./components/Header.jsx"
import { WriteArea } from "./components/WriteArea.jsx"
import { Controlls } from "./components/Controlls.jsx"
import { Stats } from "./components/Stats.jsx"

function App() {
    return (
        <main>
            <Header />

            <h2>
                Analyze your text <br />
                in real-time.
            </h2>

            <WriteArea />

            <Controlls />

            <Stats />
        </main>
    )
}

export { App }
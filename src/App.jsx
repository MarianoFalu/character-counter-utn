import { Header } from "./components/Header.jsx"
import { WriteArea } from "./components/WriteArea.jsx"

function App() {
    return (
      <main>
          <Header />

          <h2>Analyze your text <br />
              in real-time.
          </h2>

          <WriteArea />
      </main>
    )
}

export { App }
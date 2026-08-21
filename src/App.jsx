import { useState } from "react"

import { Header } from "./components/Header.jsx"
import { WriteArea } from "./components/WriteArea.jsx"
import { Controlls } from "./components/Controlls.jsx"
import { Stats } from "./components/Stats.jsx"
import { LetterDensity } from "./components/LetterDensity.jsx"

function App() {

    const [text, setText] = useState("")

    const handleChangeTextarea = (e) => {
        const value = e.target.value
        setText(value)
    }

    const sortLetters = [
        {
            letterName: "e",
            amount: 40,
            percentage: 16.06
        },
        {
            letterName: "i",
            amount: 29,
            percentage: 11.65
        },
        {
            letterName: "t",
            amount: 28,
            percentage: 11.24
        },
        {
            letterName: "o",
            amount: 22,
            percentage: 8.84
        },
        {
            letterName: "n",
            amount: 21,
            percentage: 8.43
        }
    ]

    return (
        <main>

            <Header />

            <h2>
                Analyze your text <br />
                in real-time.
            </h2>

            <WriteArea
                handleChangeTextarea={handleChangeTextarea}
                text={text}
            />

            <Controlls />

            <Stats />

            <LetterDensity sortLetters={sortLetters} />

        </main>
    )
}

export { App }
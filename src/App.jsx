import { useState } from "react"
import { Header } from "./components/Header.jsx"
import { WriteArea } from "./components/WriteArea.jsx"
import { Controlls } from "./components/Controlls.jsx"
import { Stats } from "./components/Stats.jsx"
import { LetterDensity } from "./components/LetterDensity.jsx"

function App() {

    const [text, setText] = useState("")
    const [excludeSpaces, setExcludeSpaces] = useState(false)
    const [limitCharacter, setLimitCharacter] = useState(false)
    const [limitValue, setLimitValue] = useState(10)

    const handleChangeTextarea = (e) => {
        const value = e.target.value

        if (limitCharacter) {
            if (value.length <= limitValue) {
                setText(value)
            }
        } else {
            setText(value)
        }
    }

    const handleExcludeSpaces = () => {
    setExcludeSpaces(!excludeSpaces)
    }

    const handleChangeInputLimit = () => {
    setLimitCharacter(!limitCharacter)
    }

    const handleLimitValue = (value) => {
        if (text !== "") {
            return
        }

        setLimitValue(value)
    }

    const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length

    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length

    const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length

    const readingTime = Math.ceil(words / 180)

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

            <Controlls
                readingTime={readingTime}
                excludeSpaces={excludeSpaces}
                handleExcludeSpaces={handleExcludeSpaces}
                limitCharacter={limitCharacter}
                handleChangeInputLimit={handleChangeInputLimit}
                limitValue={limitValue}
                handleLimitValue={handleLimitValue}
            />

            <Stats
                characters={characters}
                words={words}
                sentences={sentences}
            />

            <LetterDensity sortLetters={sortLetters} />

        </main>
    )
}

export { App }
import { useContext, useState } from "react"
import { Header } from "./components/Header.jsx"
import { WriteArea } from "./components/WriteArea.jsx"
import { Controlls } from "./components/Controlls.jsx"
import { Stats } from "./components/Stats.jsx"
import { LetterDensity } from "./components/LetterDensity.jsx"
import { ThemeContext } from "./context/ThemeContext.jsx"

function App() {

    const { dark, handleDarkTheme } = useContext(ThemeContext)

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

    const cleanText = text.toLowerCase().replace(/[^a-záéíóúü]/g, "")

    const total = cleanText.length

    const dictionaryLetters = {}

    cleanText.split("").forEach(letter => {
        dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1
    })

    const letters = Object.entries(dictionaryLetters).map(dataLetter => {
        const letter = dataLetter[0]
        const amountLetter = dataLetter[1]

        const infoToRenderLetter = {
            letterName: letter,
            amount: amountLetter,
            percentage: (amountLetter / total) * 100
        }

        return infoToRenderLetter
    })

    const sortLetters = letters.sort((a, b) => b.amount - a.amount)

    return (
        <main className={dark ? "dark-theme" : ""}>

            <Header
                dark={dark}
                handleDarkTheme={handleDarkTheme}
            />

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

            {
                text && <LetterDensity sortLetters={sortLetters} />
            }

        </main>
    )
}

export { App }
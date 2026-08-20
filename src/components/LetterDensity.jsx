import { ProgressBar } from "./ProgressBar"

const LetterDensity = ({ sortLetters }) => {
    return (
        <section className="letter-density">

            <h3>Letter Density</h3>

            <ul>
                {
                    sortLetters.slice(0, 5).map(letter =>
                        <ProgressBar
                            key={letter.letterName}
                            letter={letter}
                        />
                    )
                }
            </ul>

            <details>
                <summary>See more</summary>

                <ul>
                    {
                        sortLetters.slice(5, sortLetters.length).map(letter =>
                            <ProgressBar
                                key={letter.letterName}
                                letter={letter}
                            />
                        )
                    }
                </ul>
            </details>

        </section>
    )
}

export { LetterDensity }
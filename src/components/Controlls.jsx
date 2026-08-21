const Controlls = ({
    readingTime,
    excludeSpaces,
    handleExcludeSpaces,
    limitCharacter,
    handleChangeInputLimit,
    limitValue,
    handleLimitValue
}) => {
    return (
        <section className="controls">
            <div className="left-controls">
                <label>
                    <input
                        type="checkbox"
                        checked={excludeSpaces}
                        onChange={handleExcludeSpaces}
                    />
                    Exclude Spaces
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={limitCharacter}
                        onChange={handleChangeInputLimit}
                    />
                    Set Character Limit

                    {
                        limitCharacter &&
                        <input
                            type="number"
                            value={limitValue}
                            onChange={(e) => handleLimitValue(e.target.value)}
                        />
                    }
                </label>
            </div>

            <p>Approx. reading time: ~{readingTime} minute{readingTime !== 1 && "s"}</p>
        </section>
    )
}

export { Controlls }
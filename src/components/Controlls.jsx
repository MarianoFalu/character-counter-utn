const Controlls = ({ readingTime }) => {
    return (
        <section className="controls">
            <div className="left-controls">
                <label>
                    <input type="checkbox" />
                    Exclude Spaces
                </label>

                <label>
                    <input type="checkbox" />
                    Set Character Limit
                </label>
            </div>

            <p>Approx. reading time: ~{readingTime} minute{readingTime !== 1 && "s"}</p>
        </section>
    )
}

export { Controlls }
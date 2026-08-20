const Controlls = () => {
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

            <p>Approx. reading time: &lt;1 minute</p>
        </section>
    )
}

export { Controlls }
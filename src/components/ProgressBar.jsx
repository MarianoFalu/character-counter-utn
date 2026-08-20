const ProgressBar = ({ letter }) => {
    return (
        <li className="row">
            <span className="letter">
                {letter.letterName.toUpperCase()}
            </span>

            <meter
                min="0"
                max="100"
                value={letter.percentage}
            ></meter>

            <span className="info">
                {letter.amount} ({letter.percentage.toFixed(1)}%)
            </span>
        </li>
    )
}

export { ProgressBar }
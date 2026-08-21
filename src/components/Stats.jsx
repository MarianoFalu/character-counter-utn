const Stats = ({ characters, words, sentences, readingTime }) => {
  return (
    <section className="cards">
      <div className="characters">
        <p className="number">{characters}</p>
        <p className="label">Total Characters</p>
      </div>

      <div className="word">
        <p className="number">{words}</p>
        <p className="label">Word Count</p>
      </div>

      <div className="sentence">
        <p className="number">{sentences}</p>
        <p className="label">Sentence Count</p>
      </div>
    </section>
  )
}

export { Stats }
function FlashCard({ question, answer, category, image, isFlipped, onFlip }) {
  const side = isFlipped ? "Answer" : "Question"
  const text = isFlipped ? answer : question

  return (
    <button
      type="button"
      className={`card card-${category.toLowerCase()}`}
      onClick={onFlip}
      aria-pressed={isFlipped}
    >
      <img className="card-image" src={image} alt="" />
      <div className="card-body">
        <p className="card-category">{category}</p>
        <p className="card-side">{side}</p>
        <p className="card-text">{text}</p>
      </div>
    </button>
  )
}

export default FlashCard

import { useState } from 'react'
import { cardSet, cards } from './data/cards'
import FlashCard from './components/FlashCard'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const card = cards[currentIndex]

  function handleFlip() {
    setIsFlipped((flipped) => !flipped)
  }

  function handleNext() {
    let nextIndex = currentIndex
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * cards.length)
    }
    setCurrentIndex(nextIndex)
    setIsFlipped(false)
  }

  return (
    <div className="board">
      <header className="board-header">
        <p className="board-kicker">Food truck flashcards</p>
        <h1>{cardSet.title}</h1>
        <p className="board-intro">{cardSet.description}</p>
        <p className="board-count">{cards.length} cards</p>
      </header>
      <main className="study">
        <FlashCard
          key={card.id}
          question={card.question}
          answer={card.answer}
          category={card.category}
          image={card.image}
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />
        <button type="button" className="next-button" onClick={handleNext}>
          Next card
        </button>
      </main>
    </div>
  )
}

export default App

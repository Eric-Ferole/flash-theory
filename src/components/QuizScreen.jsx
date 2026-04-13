import { useState } from 'react'
import FlashCard from './FlashCard'

export default function QuizScreen({ cards, onFinish, onBack }) {
  const [index, setIndex]     = useState(0)
  const [correct, setCorrect] = useState([])
  const [wrong, setWrong]     = useState([])
  // pile: remaining cards (may include re-queued wrong answers)
  const [pile, setPile]       = useState(cards)

  const total       = cards.length
  const remaining   = pile.length
  const current     = pile[index] ?? null
  const doneCount   = total - remaining + index
  const progress    = doneCount / total

  function handleSwipe(result) {
    const card = pile[index]

    if (result === 'correct') {
      setCorrect(prev => [...prev, card])
      advance(pile, index)
    } else {
      setWrong(prev => {
        // Only record first miss
        const alreadyWrong = prev.some(c => c.id === card.id)
        return alreadyWrong ? prev : [...prev, card]
      })
      // Re-queue at end of pile
      const newPile = [...pile]
      newPile.splice(index, 1)
      newPile.push(card)
      if (newPile.length === 0) {
        onFinish({ correct, wrong: [...wrong, card] })
      } else {
        setPile(newPile)
        // index stays, next card slides in
      }
    }
  }

  function advance(currentPile, currentIndex) {
    const newPile = [...currentPile]
    newPile.splice(currentIndex, 1)

    if (newPile.length === 0) {
      onFinish({ correct: [...correct, currentPile[currentIndex]], wrong })
    } else {
      setPile(newPile)
      // keep index clamped
      if (currentIndex >= newPile.length) setIndex(0)
    }
  }

  if (!current) return null

  return (
    <div className="quiz">
      <div className="quiz__header">
        <button className="quiz__back-btn" onClick={onBack}>←</button>
        <span className="quiz__progress-text">
          {pile.length} left
        </span>
        <span className="quiz__score">✓ {correct.length}</span>
      </div>

      <div className="quiz__progress-bar">
        <div
          className="quiz__progress-bar-fill"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="quiz__card-area">
        <FlashCard
          key={current.id + '_' + pile.length}
          card={current}
          onSwipe={handleSwipe}
        />
      </div>

      <div className="quiz__instructions">
        <span><span className="icon-wrong">← ✗</span> Wrong</span>
        <span><span className="icon-right">✓ →</span> Got it</span>
      </div>
      <p className="quiz__tap-hint">Tap the card to reveal the answer</p>
    </div>
  )
}

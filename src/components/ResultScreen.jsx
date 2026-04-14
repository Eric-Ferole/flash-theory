export default function ResultScreen({ correct, wrong, total, onRestart, onSettings }) {
  const score   = correct.length
  const pct     = total > 0 ? Math.round((score / total) * 100) : 0
  const conicPct = `${pct * 3.6}deg`

  const emoji = pct === 100 ? '🎉' : pct >= 70 ? '👍' : pct >= 40 ? '💪' : '📚'

  return (
    <div className="result">
      <div className="result__emoji">{emoji}</div>
      <h1 className="result__title">
        {pct === 100 ? 'Perfect!' : pct >= 70 ? 'Well done!' : 'Keep practicing!'}
      </h1>
      <p className="result__subtitle">
        You answered {score} of {total} cards correctly
      </p>

      <div
        className="result__score-ring"
        style={{ '--pct': conicPct }}
      >
        <span>{pct}%</span>
      </div>

      <div className="result__stats">
        <div className="result__stat result__stat--correct">
          <span className="stat-value">{score}</span>
          <span className="stat-label">Correct</span>
        </div>
        <div className="result__stat result__stat--wrong">
          <span className="stat-value">{wrong.length}</span>
          <span className="stat-label">Missed</span>
        </div>
      </div>

      {wrong.length > 0 && (
        <div className="result__missed">
          <h3>Cards to review</h3>
          <div className="result__missed-list">
            {wrong.map(card => (
              <div key={card.id} className="result__missed-item">
                {card.type === 'spell' ? (
                  <span className="note">{card.scaleLabel}</span>
                ) : (
                  <span>
                    <span className="note">{card.note}</span>
                    <span className="scale"> — {card.scaleLabel}</span>
                  </span>
                )}
                {card.type === 'spell'
                  ? <span className="degree">{card.notes.map(n => n.note).join(' · ')}</span>
                  : <span className="degree">{card.roman}</span>
                }
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="result__actions">
        <button className="result__btn result__btn--primary" onClick={onRestart}>
          Try again
        </button>
        <button className="result__btn result__btn--secondary" onClick={onSettings}>
          Change scales
        </button>
      </div>
    </div>
  )
}

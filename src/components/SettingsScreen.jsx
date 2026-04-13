import { useState } from 'react'
import { MAJOR_SCALES, MINOR_SCALES, generateCards } from '../data/scales'

export default function SettingsScreen({ onStart }) {
  const [selected, setSelected] = useState(new Set(['C_maj', 'F_maj', 'G_maj', 'A_min', 'D_min', 'E_min']))

  function toggle(key) {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  function selectAll() {
    const all = [...MAJOR_SCALES, ...MINOR_SCALES].map(s => s.key)
    setSelected(new Set(all))
  }

  function selectNone() {
    setSelected(new Set())
  }

  function handleStart() {
    const cards = generateCards([...selected])
    onStart(cards)
  }

  const cardCount = [...selected].length * 7

  return (
    <div className="settings">
      <div className="settings__header">
        <h1>Music Theory</h1>
        <p>Select the scales you want to practice</p>
      </div>

      <div className="settings__select-all">
        <button onClick={selectAll}>Select all</button>
        <button onClick={selectNone}>Clear</button>
      </div>

      <div className="settings__section">
        <h2>Major Scales</h2>
        <div className="settings__grid">
          {MAJOR_SCALES.map(scale => (
            <button
              key={scale.key}
              className={`settings__scale-btn${selected.has(scale.key) ? ' settings__scale-btn--selected' : ''}`}
              onClick={() => toggle(scale.key)}
            >
              {scale.label}
            </button>
          ))}
        </div>
      </div>

      <div className="settings__section">
        <h2>Minor Scales</h2>
        <div className="settings__grid">
          {MINOR_SCALES.map(scale => (
            <button
              key={scale.key}
              className={`settings__scale-btn${selected.has(scale.key) ? ' settings__scale-btn--selected' : ''}`}
              onClick={() => toggle(scale.key)}
            >
              {scale.label}
            </button>
          ))}
        </div>
      </div>

      <div className="settings__footer">
        <button
          className="settings__start-btn"
          onClick={handleStart}
          disabled={selected.size === 0}
        >
          Start — {cardCount} cards
        </button>
        <p className="settings__count">
          {selected.size} scale{selected.size !== 1 ? 's' : ''} selected
        </p>
      </div>
    </div>
  )
}

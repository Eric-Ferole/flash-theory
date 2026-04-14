import { useState } from 'react'
import {
  MAJOR_SCALES,
  MINOR_SCALES,
  MAJOR_PENTA_SCALES,
  MINOR_PENTA_SCALES,
  generateDegreeCards,
  generateSpellCards,
} from '../data/scales'

const GAME_MODES = [
  { id: 'degree', label: 'Scale Degrees', sub: 'Identify the degree of a note' },
  { id: 'spell',  label: 'Spell the Scale', sub: 'Recall all notes of a scale' },
]

const DEFAULT_SELECTED = new Set(['C_maj', 'F_maj', 'G_maj', 'A_min', 'D_min', 'E_min'])

export default function SettingsScreen({ onStart }) {
  const [mode, setMode]       = useState('degree')
  const [selected, setSelected] = useState(DEFAULT_SELECTED)

  function toggle(key) {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  function selectAll() {
    const allKeys = [
      ...MAJOR_SCALES,
      ...MINOR_SCALES,
      ...MAJOR_PENTA_SCALES,
      ...MINOR_PENTA_SCALES,
    ].map(s => s.key)
    setSelected(new Set(allKeys))
  }

  function selectNone() {
    setSelected(new Set())
  }

  function handleStart() {
    const keys = [...selected]
    const cards = mode === 'spell'
      ? generateSpellCards(keys)
      : generateDegreeCards(keys)
    onStart(cards, mode)
  }

  const selectedCount = selected.size
  const cardCount = mode === 'spell'
    ? selectedCount
    : selectedCount * 7   // approx (penta has 5, but close enough for display)

  function ScaleGroup({ scales, label }) {
    return (
      <div className="settings__section">
        <h2>{label}</h2>
        <div className="settings__grid">
          {scales.map(scale => (
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
    )
  }

  return (
    <div className="settings">
      <div className="settings__header">
        <h1>Music Theory</h1>
        <p>Select a game and the scales to practice</p>
      </div>

      {/* Game mode toggle */}
      <div className="settings__mode-toggle">
        {GAME_MODES.map(m => (
          <button
            key={m.id}
            className={`settings__mode-btn${mode === m.id ? ' settings__mode-btn--active' : ''}`}
            onClick={() => setMode(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="settings__select-all">
        <button onClick={selectAll}>Select all</button>
        <button onClick={selectNone}>Clear</button>
      </div>

      <ScaleGroup scales={MAJOR_SCALES}       label="Major" />
      <ScaleGroup scales={MINOR_SCALES}       label="Minor" />
      <ScaleGroup scales={MAJOR_PENTA_SCALES} label="Major Pentatonic" />
      <ScaleGroup scales={MINOR_PENTA_SCALES} label="Minor Pentatonic" />

      <div className="settings__footer">
        <button
          className="settings__start-btn"
          onClick={handleStart}
          disabled={selectedCount === 0}
        >
          Start — {cardCount} cards
        </button>
        <p className="settings__count">
          {selectedCount} scale{selectedCount !== 1 ? 's' : ''} selected
        </p>
      </div>
    </div>
  )
}

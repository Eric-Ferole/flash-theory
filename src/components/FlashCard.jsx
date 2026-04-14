import { useState, useRef } from 'react'

const SWIPE_THRESHOLD = 80
const SWIPE_MAX       = 150

export default function FlashCard({ card, onSwipe }) {
  const [isFlipped, setIsFlipped]   = useState(false)
  const [dragX, setDragX]           = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef                   = useRef(null)

  const isSpell = card.type === 'spell'

  // ── Touch handlers ──────────────────────────────────────────
  function handleTouchStart(e) {
    startXRef.current = e.touches[0].clientX
    setIsDragging(true)
  }

  function handleTouchMove(e) {
    if (startXRef.current === null) return
    setDragX(e.touches[0].clientX - startXRef.current)
  }

  function handleTouchEnd() {
    commitGesture()
  }

  // ── Mouse handlers (desktop) ─────────────────────────────────
  function handleMouseDown(e) {
    startXRef.current = e.clientX
    setIsDragging(true)
  }

  function handleMouseMove(e) {
    if (!isDragging || startXRef.current === null) return
    setDragX(e.clientX - startXRef.current)
  }

  function handleMouseUp() {
    commitGesture()
  }

  function commitGesture() {
    if (!isFlipped) {
      if (Math.abs(dragX) < 10) setIsFlipped(true)
    } else {
      if      (dragX > SWIPE_THRESHOLD)  onSwipe('correct')
      else if (dragX < -SWIPE_THRESHOLD) onSwipe('wrong')
    }
    setDragX(0)
    setIsDragging(false)
    startXRef.current = null
  }

  // ── Visual feedback ──────────────────────────────────────────
  const tilt       = isFlipped ? (dragX / SWIPE_MAX) * 20 : 0
  const translateX = isFlipped ? dragX * 0.4 : 0
  const tintRatio  = Math.min(Math.abs(dragX) / SWIPE_MAX, 1)

  const faceClass = (base) => {
    let cls = base
    if (isFlipped && dragX > SWIPE_THRESHOLD)  cls += ' swipe-right'
    if (isFlipped && dragX < -SWIPE_THRESHOLD) cls += ' swipe-left'
    return cls
  }

  const cardStyle = {
    transform: isFlipped
      ? `rotateY(180deg) rotate(${-tilt}deg) translateX(${-translateX}px)`
      : `rotate(${tilt}deg) translateX(${translateX}px)`,
    transition: isDragging ? 'none' : undefined,
  }

  // ── Front content ────────────────────────────────────────────
  const Front = isSpell ? (
    <>
      <p className="flashcard__scale-type">Spell the scale</p>
      <p className="flashcard__scale-name">{card.scaleLabel}</p>
      <p className="flashcard__hint">Tap to reveal all notes</p>
    </>
  ) : (
    <>
      <p className="flashcard__scale">{card.scaleLabel}</p>
      <p className="flashcard__note">{card.note}</p>
      <p className="flashcard__hint">Tap to reveal degree</p>
    </>
  )

  // ── Back content ─────────────────────────────────────────────
  const Back = isSpell ? (
    <>
      <p className="flashcard__scale" style={{ marginBottom: 20 }}>{card.scaleLabel}</p>
      <div className="flashcard__notes-grid">
        {card.notes.map(({ note, roman }) => (
          <div key={roman} className="flashcard__note-chip">
            <span className="chip-note">{note}</span>
            <span className="chip-degree">{roman}</span>
          </div>
        ))}
      </div>
    </>
  ) : (
    <>
      <p className="flashcard__roman">{card.roman}</p>
      <p className="flashcard__degree-name">{card.degreeName}</p>
      <p className="flashcard__scale-back">{card.scaleLabel} · {card.note}</p>
    </>
  )

  return (
    <div
      className="flashcard-scene"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="flashcard" style={cardStyle}>
        {/* FRONT */}
        <div className={faceClass('flashcard__face flashcard__face--front')}>
          <span className="flashcard__swipe-icon flashcard__swipe-icon--left">✗</span>
          <span className="flashcard__swipe-icon flashcard__swipe-icon--right">✓</span>
          {Front}
        </div>

        {/* BACK */}
        <div className={faceClass('flashcard__face flashcard__face--back')}>
          <span
            className="flashcard__swipe-icon flashcard__swipe-icon--left"
            style={{ opacity: dragX < 0 ? tintRatio : 0 }}
          >✗</span>
          <span
            className="flashcard__swipe-icon flashcard__swipe-icon--right"
            style={{ opacity: dragX > 0 ? tintRatio : 0 }}
          >✓</span>
          {Back}
        </div>
      </div>
    </div>
  )
}

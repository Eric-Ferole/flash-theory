import { useState, useRef } from 'react'

const SWIPE_THRESHOLD = 80   // px to trigger a swipe decision
const SWIPE_MAX      = 150  // px for full tint

export default function FlashCard({ card, onSwipe }) {
  const [isFlipped, setIsFlipped]       = useState(false)
  const [dragX, setDragX]               = useState(0)
  const [isDragging, setIsDragging]     = useState(false)
  const startXRef                        = useRef(null)

  // Reset card when card prop changes
  const prevCardId = useRef(card.id)
  if (card.id !== prevCardId.current) {
    prevCardId.current = card.id
    // State reset happens on re-render via key prop in parent
  }

  // ── Touch handlers ──────────────────────────────────────────
  function handleTouchStart(e) {
    startXRef.current = e.touches[0].clientX
    setIsDragging(true)
  }

  function handleTouchMove(e) {
    if (startXRef.current === null) return
    const dx = e.touches[0].clientX - startXRef.current
    setDragX(dx)
  }

  function handleTouchEnd() {
    if (!isFlipped) {
      // Only flip, no swipe decision yet
      if (Math.abs(dragX) < 10) setIsFlipped(true)
    } else {
      if (dragX > SWIPE_THRESHOLD) {
        onSwipe('correct')
      } else if (dragX < -SWIPE_THRESHOLD) {
        onSwipe('wrong')
      }
    }
    setDragX(0)
    setIsDragging(false)
    startXRef.current = null
  }

  // ── Mouse handlers (desktop) ─────────────────────────────────
  function handleMouseDown(e) {
    startXRef.current = e.clientX
    setIsDragging(true)
  }

  function handleMouseMove(e) {
    if (!isDragging || startXRef.current === null) return
    const dx = e.clientX - startXRef.current
    setDragX(dx)
  }

  function handleMouseUp() {
    if (!isFlipped) {
      if (Math.abs(dragX) < 10) setIsFlipped(true)
    } else {
      if (dragX > SWIPE_THRESHOLD) {
        onSwipe('correct')
      } else if (dragX < -SWIPE_THRESHOLD) {
        onSwipe('wrong')
      }
    }
    setDragX(0)
    setIsDragging(false)
    startXRef.current = null
  }

  // ── Visual feedback ──────────────────────────────────────────
  const tilt    = isFlipped ? (dragX / SWIPE_MAX) * 20 : 0
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

          <p className="flashcard__scale">{card.scaleLabel}</p>
          <p className="flashcard__note">{card.note}</p>
          <p className="flashcard__hint">Tap to reveal degree</p>
        </div>

        {/* BACK */}
        <div className={faceClass('flashcard__face flashcard__face--back')}>
          <span
            className={`flashcard__swipe-icon flashcard__swipe-icon--left${dragX < -SWIPE_THRESHOLD ? ' visible' : ''}`}
            style={{ opacity: dragX < 0 ? tintRatio : 0 }}
          >✗</span>
          <span
            className={`flashcard__swipe-icon flashcard__swipe-icon--right${dragX > SWIPE_THRESHOLD ? ' visible' : ''}`}
            style={{ opacity: dragX > 0 ? tintRatio : 0 }}
          >✓</span>

          <p className="flashcard__roman">{card.roman}</p>
          <p className="flashcard__degree-name">{card.degreeName}</p>
          <p className="flashcard__scale-back">{card.scaleLabel} · {card.note}</p>
        </div>
      </div>
    </div>
  )
}

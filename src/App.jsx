import { useState } from 'react'
import SettingsScreen from './components/SettingsScreen'
import QuizScreen     from './components/QuizScreen'
import ResultScreen   from './components/ResultScreen'

export default function App() {
  const [screen, setScreen]   = useState('settings') // 'settings' | 'quiz' | 'result'
  const [cards, setCards]     = useState([])
  const [results, setResults] = useState(null)

  function handleStart(generatedCards, gameMode) {
    setCards(generatedCards)
    setResults(null)
    setScreen('quiz')
  }

  function handleFinish({ correct, wrong }) {
    setResults({ correct, wrong, total: cards.length })
    setScreen('result')
  }

  function handleRestart() {
    // Reshuffle the same cards
    const shuffled = [...cards].sort(() => Math.random() - 0.5)
    setCards(shuffled)
    setResults(null)
    setScreen('quiz')
  }

  function handleBack() {
    setScreen('settings')
  }

  return (
    <>
      {screen === 'settings' && (
        <SettingsScreen onStart={handleStart} />
      )}
      {screen === 'quiz' && (
        <QuizScreen
          cards={cards}
          onFinish={handleFinish}
          onBack={handleBack}
        />
      )}
      {screen === 'result' && results && (
        <ResultScreen
          correct={results.correct}
          wrong={results.wrong}
          total={results.total}
          onRestart={handleRestart}
          onSettings={handleBack}
        />
      )}
    </>
  )
}

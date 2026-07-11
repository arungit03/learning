import { useState } from 'react'

const buttons = ['C', '/', '*', '-', '7', '8', '9', '+', '4', '5', '6', '=', '1', '2', '3', '0', '.']
const initialState = { display: '0', previous: null, operator: null, waiting: false }

function calculate(firstNumber, secondNumber, operator) {
  if (operator === '/' && secondNumber === 0) {
    return 'Error'
  }

  return {
    '+': firstNumber + secondNumber,
    '-': firstNumber - secondNumber,
    '*': firstNumber * secondNumber,
    '/': firstNumber / secondNumber,
  }[operator]
}

function formatResult(value) {
  return value === 'Error' ? value : Number.parseFloat(value.toFixed(10)).toString()
}

function getButtonClass(button) {
  return [
    'button',
    button === '0' && 'button-zero',
    ['/', '*', '-', '+', '='].includes(button) && 'button-operator',
    button === 'C' && 'button-clear',
  ]
    .filter(Boolean)
    .join(' ')
}

export default function App() {
  const [calculator, setCalculator] = useState(initialState)
  const { display } = calculator

  function handleButtonClick(value) {
    setCalculator((current) => {
      const { display, previous, operator, waiting } = current

      if (/^\d$/.test(value)) {
        if (display === 'Error' || waiting) {
          return { ...current, display: value, waiting: false }
        }

        return { ...current, display: display === '0' ? value : display + value }
      }

      if (value === '.') {
        if (display === 'Error' || waiting) {
          return { ...current, display: '0.', waiting: false }
        }

        return display.includes('.') ? current : { ...current, display: display + '.' }
      }

      if (value === 'C') {
        return initialState
      }

      if (display === 'Error') {
        return initialState
      }

      if (value === '=') {
        if (previous === null || operator === null) {
          return current
        }

        const result = calculate(previous, waiting ? previous : Number(display), operator)
        return result === 'Error'
          ? { ...initialState, display: 'Error' }
          : { ...initialState, display: formatResult(result), waiting: true }
      }

      if (previous === null) {
        return { ...current, previous: Number(display), operator: value, waiting: true }
      }

      if (waiting) {
        return { ...current, operator: value }
      }

      const result = calculate(previous, Number(display), operator)

      if (result === 'Error') {
        return { ...initialState, display: 'Error' }
      }

      const nextDisplay = formatResult(result)
      return { display: nextDisplay, previous: Number(nextDisplay), operator: value, waiting: true }
    })
  }

  return (
    <main className="app">
      <section className="calculator">
        <h1>Simple Calculator</h1>
        <div className="display">{display}</div>

        <div className="buttons">
          {buttons.map((button) => (
            <button
              key={button}
              type="button"
              className={getButtonClass(button)}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {

    console.log('increasing good, value before', good)
    setGood(good + 1)
  }

  const increaseNeutral = () => {

    console.log('increasing neutral, value before', neutral)
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {

    console.log('increasing bad, value before', bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Statistics />
      <Display type="good" counter={good} />
      <Display type="neutral" counter={neutral} />
      <Display type="bad" counter={bad} />
    </div>
  )
}

const Header = () => {
  return (
    <h1> give feedback </h1>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
const Statistics = () => (<h2>statistics</h2>)

const Display = ({ type, counter }) => {
  return (
    <p>{type}: {counter}</p>
  )
}

export default App
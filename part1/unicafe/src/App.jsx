import { useState } from 'react'
const average = []

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const average = all === 0 ? 0 : (good-bad)/all //first part is to ensure we don't divide by (all=)0
  const positive = `${all === 0 ? 0 : (good)/all*100} %`

  const increaseGood = () => {
    // console.log('increasing good, value before', good)
    setGood(good + 1)
    setAll(all + 1)
  }

  const increaseNeutral = () => {
    // console.log('increasing neutral, value before', neutral)
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const increaseBad = () => {
    // console.log('increasing bad, value before', bad)
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <Header />
      <Button onClick={increaseGood} text="good" average={average}/>
      <Button onClick={increaseNeutral} text="neutral" average={average} />
      <Button onClick={increaseBad} text="bad" average={average} />
      <Statistics />
      <Display type="good" counter={good} />
      <Display type="neutral" counter={neutral} />
      <Display type="bad" counter={bad} />
      <Display type="all" counter={all} />
      <Display type="average" counter={average} />
      <Display type="positive" counter={positive} />
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
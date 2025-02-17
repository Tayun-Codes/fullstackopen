import { useState } from 'react'
const average = []

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const average = all === 0 ? 0 : (good - bad) / all //first part is to ensure we don't divide by (all=)0
  const positive = `${all === 0 ? 0 : (good) / all * 100} %`

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

  const type = ["good", "neutral", "bad", "all", "average", "positive"]
  const counter = [good, neutral, bad, all, average, positive]


  return (
    <div>
      <Header />
      <Button onClick={increaseGood} text="good" average={average} />
      <Button onClick={increaseNeutral} text="neutral" average={average} />
      <Button onClick={increaseBad} text="bad" average={average} />
      <Statistics type={type} counter={counter} all={all} />
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

const Statistics = ({ type, counter, all }) => {
  console.log(all)
  if (all == 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <StatisticLine type={type[0]} counter={counter[0]} />
          <StatisticLine type={type[1]} counter={counter[1]} />
          <StatisticLine type={type[2]} counter={counter[2]} />
          <StatisticLine type={type[3]} counter={counter[3]} />
          <StatisticLine type={type[4]} counter={counter[4]} />
          <StatisticLine type={type[5]} counter={counter[5]} />
        </table>
      </div>
    )
  }
}

const StatisticLine = ({ type, counter }) => {
  console.log(type, counter)
  return (
    <tr><td>{type}:</td> <td>{counter}</td></tr>
  )
}

export default App
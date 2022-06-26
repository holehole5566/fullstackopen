import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const StatisticLine = ({text,value}) => {
    if(text==="positive")
    {
      return(
        <tr>
          <td>{text} </td>
          <td> {value} %</td>
        </tr>
       )
    }
    else{
      return(
        <tr>
        <td>{text} </td>
        <td> {value} </td>
      </tr>
      )
    }
  
  }

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const Statistics = (props) => {
    // ...
    if(good+bad+neutral!==0)
    {
      return(
        <div>
        <h1>statistic</h1>
        <table>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={good+neutral+bad} />
        <StatisticLine text="average" value ={(good-bad)/(good+neutral+bad)} />
        <StatisticLine text="positive" value ={100*good/(good+neutral+bad)} />
        </table>
        </div>
      )
    }
    else
    {
      return(
        <div>
        <h1>statistic</h1>
        <p>no feedback</p>
        </div>
      )
    }
 
  
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
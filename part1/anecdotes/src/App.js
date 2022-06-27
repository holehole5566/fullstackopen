import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  let n = 7  // arbitrary length
  let a = Array(n).fill(0)

  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(a)

  const [maxIndex, setMaxIndex] = useState(0)

  const SetVoted = () => {
    let max=0
    const copy = [...voted]
    copy[selected]+=1
    setVoted(copy)
    for(let i=0;i<7;i++){
      if(copy[i]>max)
      {
        max=copy[i]
        setMaxIndex(i)
      }
    }
    console.log(voted)
  }

  return (
    <div>
      <h1>anecdotes of the day</h1>
      {anecdotes[selected%7]}
      <br></br>
      <p>has {voted[selected%7]} votes</p>
      <button onClick={SetVoted}>
        votes 
      </button>
      <button onClick={() => setSelected(selected + 1)}>
        next anecdotes
      </button>
      <h1>anecdotes with most votes</h1>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {voted[maxIndex]} votes</p>
    </div>
  )
}

export default App
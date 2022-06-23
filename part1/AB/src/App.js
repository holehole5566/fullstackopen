const Header = (props) => {
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Total = (props) => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <p>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </p>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  )
}

const Part1 = () => {
  const exercises1 = 10
  const part1 = 'Fundamentals of React'
  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
    </div>
  )
}

const Part2 = () => {
  const exercises2 = 7
  const part2 = 'Using props to pass data'
  return (
    <div>
      <p>
        {part2} {exercises2}
      </p>
    </div>
  )
}

const Part3 = () => {
  const exercises3 = 14
  const part3 = 'State of a component'
  return (
    <div>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  )
}


const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  return (  
    <div>
      <Header course={course} />
      <Content  />
      <Total />
    </div>
  )
}

export default App
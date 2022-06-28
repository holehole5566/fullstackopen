import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>


const Part = ({parts}) => {

  const exer = parts.map(parts=>parts.exercises)
  const total = exer.reduce(
    (s, p) => s + p
  )

  return(
    <div>
      {parts.map(parts => <p>{parts.name}  {parts.exercises}</p>)}
      <p>total of exercises {total}</p>
    </div>
  )
}
    
const Content = ({ parts }) => 
  <>
    <Part
      parts={parts} 
    />   
  </>

  const Course = ({course}) => {

    const {id,name,parts} = course

    return(
      <div>
        <Header  course={name} />
        <Content parts={parts} />
      </div>
    )
  }

  const Courses =() => {
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        },
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]
    
      return (
        <>
          {courses.map(courses=><Course course={courses}/>)}
        </>
      )
    }

  export default Courses
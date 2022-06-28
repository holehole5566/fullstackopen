import React,{ useState, useEffect } from 'react'
import phoneService from './service/phone'
import './index.css'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [SuccessMessage, setSuccessMessage] = useState(null)

  const handleDelete = (event) => {
    console.log(event.target.id)
    phoneService
    .delete(event.target.id)
    .then(response => {
      setPersons(persons)
    })
  }

  useEffect(() => {
    phoneService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [handleDelete])

  const addNumber = (event) => {
    event.preventDefault()
    const NumberObject = {
      name:newName,
      phone:newPhone
    }
    let flag=0
    persons.forEach(function(person){
      if (NumberObject.name===person.name){
        flag=1
      }
    });
    if (flag===0){
      phoneService
      .create(NumberObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setSuccessMessage(
          `Added ${NumberObject.name}`
        )
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)

      })
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='success'>
        {message}
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={SuccessMessage} />
      <div>
          filter: <input value={newFilter} onChange={handleFilterChange} />
        </div>
      <h2>Add a new</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <br></br>
          phone: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(persons => {
          if(persons.name.indexOf(newFilter)<0&&newFilter!=='')
          {
            return (
              <p></p>
            )
          }
          else
          {
            return (
              <div>
                <p>{persons.name} {persons.phone} <button onClick={handleDelete} id={persons.id}>delete</button> </p>
              </div>
            )
          }
        
        }
        )}
      </ul>
    </div>
  )
}

export default App
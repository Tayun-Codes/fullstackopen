import { useState } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
  ]) 
  //controlling the form input element
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.map(person=>person.content).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        content: `${newName}: ${newNumber}`,
        id: String(persons.length + 1)
      }
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add a new</h3>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      
      <h2>Numbers</h2>
      {persons.map((name, number) => (
          <>
            <Person key={name.id} name={name} />
          </>
        ))}
    </div>
  )
}

export default App
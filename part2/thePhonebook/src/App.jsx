import { useState } from 'react'
import Person from './components/Person'

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
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}
            />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
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
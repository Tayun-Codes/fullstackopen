import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
  ]) 
  //controlling the form input element
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.map(person=>person.content).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        content: newName,
        id: String(persons.length + 1)
      }
      setPersons(persons.concat(nameObject))
    }
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((name) => (
          <Person key={name.id} name={name} />
        ))}
    </div>
  )
}

export default App
import { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './style.css'

import FullBlueButton from './FullBlueButton'
import RedButton from './RedButton'
import Footer from './Footer'
import Student from './Student'
import StudentList from './StudentList'
import Counter from './Counter'

import studentsJson from './studentData.json'

function App() {
  const [nameInput, setNameInput] = useState('')
  function changeName (event) {
    setNameInput(event.target.value)
  }
  console.log('nameInput test', nameInput)

  const [idInput, setIdInput] = useState('')
  const [students, setStudents] = useState(studentsJson)

  function onSubmit (event) {
    event.preventDefault()
    const student = { name: nameInput, id: idInput }
    console.log('submit test', student)

    const newStudents = [...students, student]
    setStudents(newStudents)
    console.log('students test', students)
  }

  return (
    <BrowserRouter>
      <form onSubmit={onSubmit}>
        <p>
          <input placeholder='Student name' type='text' onChange={changeName} />
        </p>

        <p>
          <input placeholder='Student id' type='number' onChange={event => setIdInput(event.target.value)} />
        </p>

        <button>Submit</button>
      </form>

      <Route
        path='/student/:studentName/:id?' exact component={Student}
      />

      {/* if (path === '/red') return <RedButton /> */}
      <Route path='/red' exact component={RedButton} />

      {/* if (path === '/blue') return <FullBlueButton /> */}
      <Route
        path='/blue' exact component={FullBlueButton}
      />

      <StudentList students={students} />

      <ul>
        <li>
           <Link to='/red'>Red!</Link>
        </li>
        <li>
          <Link to='/blue'>Blue</Link>
        </li>
      </ul>

      <Counter />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
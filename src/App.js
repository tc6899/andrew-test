import { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './style.css'

import FullBlueButton from './FullBlueButton'
import RedButton from './RedButton'
import Footer from './Footer'
import Student from './Student'
import StudentList from './StudentList'
import Counter from './Counter'
import Home from './Home'
import StudentsProvider from './context/Provider'
import CreateStudentForm from './CreateStudentForm'

function App() {
  return (
    <BrowserRouter>
      {/* if (path === '/red') return <RedButton /> */}
      <Route path='/red' exact component={RedButton} />

      {/* if (path === '/blue') return <FullBlueButton /> */}
      <Route
        path='/blue' exact component={FullBlueButton}
      />

      <StudentsProvider>
        <CreateStudentForm />

        <Route
          path='/student/:studentName/:id?' exact component={Student}
        />

        <Route path='/' exact component={Home} />
      </StudentsProvider>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
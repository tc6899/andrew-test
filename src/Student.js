import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DateTime, Info } from 'luxon'

import studentsContext from './context/students'
import Header from './Header'

const now = DateTime.now()
const day = now.weekday
const weekdays = Info.weekdays()
const weekday = weekdays[day - 1]
const message = `Welcome to ${weekday}`
const { hour, minute, second } = now

export default function Student () {
  // path='/student/:studentName' exact component={Student}
  const params = useParams()
  const { studentName, id } = params

  const { students } = useContext(studentsContext)

  const student = students.find(potentialStudent => {
    const lowerName = potentialStudent.name.toLowerCase()
    const nameMatch = lowerName === studentName.toLowerCase()

    const isMatch = id
      ? nameMatch && potentialStudent.id === Number(id)
      : nameMatch

    return isMatch
  })

  if (!student) {
    return <div>Student not found</div>
  }
  

  const header = <Header
    user={student} message={message}
  />

  return <>
    {header}
    <p>Hour: {hour}</p>
    <p>Minute: {minute}</p>
    <p>Second: {second}</p>
  </>
}

/* Student form component */
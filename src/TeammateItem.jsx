import { useContext } from 'react'
import studentsContext from './context/students'

export default function TeammateItem({ student, id }) {
  const { students } = useContext(studentsContext)

  const teammate = students.find((student) => student.id === id)

  const isSelf = student.id === teammate.id
  const star = isSelf ? '*' : ''

  return (
    <li>{teammate.name} {star}</li>
  )
}
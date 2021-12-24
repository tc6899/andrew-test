import StudentLink from './StudentLink'
import TeammatesList from './TeammatesList'

function StudentItem ({ student }) {
  return <li>
    <StudentLink student={student} />

    <TeammatesList student={student} />
  </li>
}

export default StudentItem;
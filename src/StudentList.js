import { Link } from 'react-router-dom'
import React, { useContext } from 'react'

import StudentItem from './StudentItem'
import studentsContext from './context/students'

function StudentList () {
  const { students } = useContext(studentsContext)

  const items = students.map((student, index) => {
    const item = <StudentItem
      key={index}
      student={student}
    />

    return item
  })

  return (
    <ol>
      {items}
    </ol>
  );
}

export default StudentList;
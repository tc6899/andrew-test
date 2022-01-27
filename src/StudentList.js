import React, { useContext } from 'react'

import StudentItem from './StudentItem'
import studentsContext from './context/students'

function StudentList () {
  // Get the array of student objects
  const { students } = useContext(studentsContext)
  // [
  //   { name: 'Andrew', id: 1 },
  //   { name: 'David', id: 2 }
  // ]

  // Define a function that explains how to convert a student object
  // into a StudentItem component
  function createItem (student, index) {
    const item = <StudentItem
      key={index}
      student={student}
    />

    return item
  }

  // Convert the array of student objects into an array of StudentItem components
  const items = students.map(createItem)
  // [
  //   <StudentItem key={0} student={{ name: 'Andrew', id: 1 }} />,
  //   <StudentItem key={1} student={{ name: 'David', id: 2 }} />
  // ]

  return (
    <ol>
      {items}
    </ol>
  );
}

export default StudentList;
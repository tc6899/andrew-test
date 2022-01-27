import { useState } from "react";
import studentsJson from "../../studentData.json";

import studentsContext from ".";

export default function StudentsProvider({ children }) {
  const [students, setStudents] = useState(studentsJson);

  function addStudent(student) {
    function pushStudent(students) {
      const newStudents = [...students, student];
      return newStudents;
    }
    setStudents(pushStudent);
  }

  const value = { students, addStudent };

  return (
    <studentsContext.Provider value={value}>
      {children}
    </studentsContext.Provider>
  );
}

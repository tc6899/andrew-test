import { useState } from "react";
import studentsJson from "../../studentData.json";

import studentsContext from ".";

export default function StudentsProvider({ children }) {
  const [students, setStudents] = useState(studentsJson);

  const value = { students, setStudents };

  return (
    <studentsContext.Provider value={value}>
      {children}
    </studentsContext.Provider>
  );
}
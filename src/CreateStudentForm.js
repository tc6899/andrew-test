import { useState, useContext } from "react";

import studentsContext from "./context/students";

export default function CreateStudentForm() {
  const { addStudent } = useContext(studentsContext);

  const [nameInput, setNameInput] = useState("");
  function changeName(event) {
    setNameInput(event.target.value);
  }

  const [idInput, setIdInput] = useState("");
  const student = { name: nameInput, id: idInput };
  const entries = Object.entries(student);
  const previews = entries.map((entry) => {
    const [key, value] = entry;
    const preview = (
      <div key={key}>
        {key}: {value}
      </div>
    );
    return preview;
  });
  console.log(entries);

  function onSubmit(event) {
    event.preventDefault();
    addStudent(student);
  }

  function reset() {
    setNameInput("");
    setIdInput("");
  }

  return (
    <form onSubmit={onSubmit}>
      <p>
        <input
          value={nameInput}
          placeholder="Student name"
          type="text"
          onChange={changeName}
        />
      </p>

      <p>
        <input
          placeholder="Student id"
          type="number"
          value={idInput}
          onChange={(event) => setIdInput(event.target.value)}
        />
        {/* When the user types in the input, the callback runs.
        The callback passes the value of the input the state. */}
      </p>
      <p>{previews}</p>
      <button>Submit</button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </form>
  );
}

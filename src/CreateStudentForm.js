import { useState, useContext } from "react";

import studentsContext from "./context/students";

export default function CreateStuentForm() {
  const { students, setStudents } = useContext(studentsContext);

  const [nameInput, setNameInput] = useState("");
  function changeName(event) {
    setNameInput(event.target.value);
  }

  const [idInput, setIdInput] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const student = { name: nameInput, id: idInput };

    const newStudents = [...students, student];
    setStudents(newStudents);
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

      <button>Submit</button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </form>
  );
}

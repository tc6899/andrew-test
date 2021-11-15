import { Link } from 'react-router-dom'

function StudentList ({ students }) {
  const links = students.map((student, index) => {
    const url = `/student/${student.name}`
    const idUrl = student.id
      ? `${url}/${student.id}`
      : url

    const link = <Link to={idUrl}>{student.name}</Link>

    return <li key={index}>{link}</li>
  })
  console.log('links test:', links)

  return (
    <ol>
      {links}
    </ol>
  );
}

export default StudentList;
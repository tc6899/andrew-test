import { Link } from 'react-router-dom';

export default function StudentLink({ student }) {
  const url = `/student/${student.name}`
  const idUrl = student.id
    ? `${url}/${student.id}`
    : url

  const link = <Link to={idUrl}>{student.name}</Link>

  return link
}
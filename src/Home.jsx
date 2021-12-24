import { Link } from 'react-router-dom'

import StudentList from './StudentList'
import Counter from './Counter'

export default function Home () {

  return (
    <>
      <StudentList />

      <ul>
        <li>
          <Link to='/red'>Red!</Link>
        </li>
        <li>
          <Link to='/blue'>Blue</Link>
        </li>
      </ul>

      <Counter />
    </>
  )
}
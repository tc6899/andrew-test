import { useState } from 'react'

import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  function updateCount (modifier) {
    setCount(count => {
      const updatedCount = count + modifier

      return updatedCount
    })
  }

  function onFocus () {
    updateCount(1)
  }

  function onClick () {
    updateCount(2)
  }

  function onChange () {
    updateCount(-1)
  }


  const andrewHeader = <Header
    user='Andrew'
    message='Welcome to Wednesday'
  />

  const message = 'Welcome to Wednesday'

  const students = [
    { name: 'Andrew', id: 1 },
    { name: 'David' },
    { name: 'David' }
  ]
  const headers = students.map((student, index) => {
    // const props = { "message": message }
    // const header = Header(props)

    const header = <Header
      user={student} message={message} key={index}
    />

    return header
  })

  return (
    <>
      {headers}

      <h2>Count: {count}</h2>

      <input
        onFocus={onFocus}
        onChange={onChange}
        placeholder='Focus or change'
      />
      <button onClick={onClick}>Click</button>

      <Footer />
    </>
  );
}

export default App;

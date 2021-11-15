import { useState } from 'react'

export default function Counter () {
  const [count, setCount] = useState(0)
  console.log('count test', count)

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
    console.log('click')
    updateCount(2)
  }

  function onChange () {
    updateCount(-1)
  }

  return (
    <>
      <h2>Count: {count}</h2>

      <input
        onFocus={onFocus}
        onChange={onChange}
        placeholder='Focus or change'
      />
      <button onClick={onClick}>Click</button>
    </>
  )
}